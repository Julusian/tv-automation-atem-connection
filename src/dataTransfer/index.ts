import exitHook = require('exit-hook')

import { Commands, Enums } from '..'
import DataLock from './dataLock'
import DataTransferFrame from './dataTransferFrame'
import DataTransferStill from './dataTransferStill'
import DataTransferClip from './dataTransferClip'
import DataTransferAudio from './dataTransferAudio'
import { ISerializableCommand } from '../commands/CommandBase'

const MAX_PACKETS_TO_SEND_PER_TICK = 10
const MAX_TRANSFER_INDEX = (1 << 16) - 1 // Inclusive maximum

export class DataTransferManager {
	private readonly commandQueue: Array<ISerializableCommand> = []

	private readonly stillsLock = new DataLock(0, cmd => this.commandQueue.push(cmd))
	private readonly clipLocks = [
		new DataLock(1, cmd => this.commandQueue.push(cmd)),
		new DataLock(2, cmd => this.commandQueue.push(cmd))
	]

	private interval?: NodeJS.Timer
	private exitUnsubscribe?: () => void

	private transferIndex: number = 0

	public startCommandSending (sendCommands: (cmds: ISerializableCommand[]) => Array<Promise<void>>) {
		if (!this.interval) {
			// New connection means a new queue
			this.commandQueue.splice(0, this.commandQueue.length)

			this.interval = setInterval(() => {
				if (this.commandQueue.length <= 0) {
					return
				}

				const commandsToSend = this.commandQueue.splice(0, MAX_PACKETS_TO_SEND_PER_TICK)
				// The only way commands are rejected is if the connection dies, so if any reject then we fail
				Promise.all(sendCommands(commandsToSend)).catch((e) => {
					// TODO - handle this better. it should kill/restart the upload. and should also be logged in some way
					console.log(`Transfer send error: ${e}`)
				})
			}, 0)
		}
		if (!this.exitUnsubscribe) {
			this.exitUnsubscribe = exitHook(() => {
				this.stopCommandSending()
			})
		}
	}
	public stopCommandSending () {
		if (this.exitUnsubscribe) {
			this.exitUnsubscribe()
			this.exitUnsubscribe = undefined
		}
		if (this.interval) {
			clearInterval(this.interval)
			this.interval = undefined
		}
	}

	public handleCommand (command: Commands.IDeserializedCommand) {
		const allLocks = [ this.stillsLock, ...this.clipLocks ]

		// try to establish the associated DataLock:
		let lock: DataLock | undefined
		if (command.constructor.name === Commands.LockObtainedCommand.name || command.constructor.name === Commands.LockStateUpdateCommand.name) {
			lock = allLocks[command.properties.index]
		} else if (typeof command.properties.storeId === 'number') {
			lock = allLocks[command.properties.storeId]
		} else if (command.properties.transferId !== undefined || command.properties.transferIndex !== undefined) {
			for (const _lock of allLocks) {
				if (_lock.activeTransfer && (_lock.activeTransfer.transferId === command.properties.transferId || _lock.activeTransfer.transferId === command.properties.transferIndex)) {
					lock = _lock
				}
			}
		} else {
			// debugging:
			console.log('UNKNOWN COMMAND:', command)
			return
		}

		// console.log('CMD', command.constructor.name)
		if (!lock) return

		// handle actual command
		if (command.constructor.name === Commands.LockObtainedCommand.name) {
			lock.lockObtained()
		}
		if (command.constructor.name === Commands.LockStateUpdateCommand.name) {
			const transferFinished = lock.activeTransfer && lock.activeTransfer.state === Enums.TransferState.Finished
			if (!command.properties.locked || transferFinished) {
				lock.lostLock()
			} else {
				lock.updateLock(command.properties.locked)
			}
		}
		if (command.constructor.name === Commands.DataTransferErrorCommand.name) {
			lock.transferErrored(command.properties.errorCode)
		}
		if (lock.activeTransfer) {
			lock.activeTransfer.handleCommand(command).forEach(cmd => this.commandQueue.push(cmd))
			if (lock.activeTransfer.state === Enums.TransferState.Finished) {
				lock.transferFinished()
			}
		}
	}

	public uploadStill (index: number, data: Buffer, name: string, description: string) {
		const transfer = new DataTransferStill(this.nextTransferIndex, index, data, name, description)
		return this.stillsLock.enqueue(transfer)
	}

	public async uploadClip (index: number, data: Array<Buffer>, name: string) {
		const frames = data.map((frame, id) => new DataTransferFrame(this.nextTransferIndex, 1 + index, id, frame))
		const transfer = new DataTransferClip(index, name, frames)
		const lock = await this.getClipLock(index)
		return lock.enqueue(transfer)
	}

	public async uploadAudio (index: number, data: Buffer, name: string) {
		const transfer = new DataTransferAudio(this.nextTransferIndex, 1 + index, data, name)
		const lock = await this.getClipLock(index)
		return lock.enqueue(transfer)
	}

	private get nextTransferIndex () {
		const index = this.transferIndex++
		if (this.transferIndex > MAX_TRANSFER_INDEX) this.transferIndex = 0
		return index
	}

	private async getClipLock (index: number) {
		const lock = this.clipLocks[index]
		if (lock) {
			return lock
		} else {
			throw new Error('Invalid clip id')
		}
	}
}
