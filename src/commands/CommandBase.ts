import { AtemState } from '../state'
import { ProtocolVersion } from '../enums'

export interface IDeserializedCommand {
	properties: any

	applyToState (state: AtemState): string | string[]
}

export abstract class DeserializedCommand<T> implements IDeserializedCommand {
	public static readonly minimumVersion?: ProtocolVersion

	public readonly properties: Readonly<T>

	constructor (properties: T) {
		this.properties = properties
	}

	public abstract applyToState (state: AtemState): string | string[]
}

export interface ISerializableCommand {
	serialize (version: ProtocolVersion): Buffer
}

export abstract class BasicWritableCommand<T> implements ISerializableCommand {
	public static readonly minimumVersion?: ProtocolVersion

	protected _properties: T

	public get properties (): Readonly<T> {
		return this._properties
	}

	constructor (properties: T) {
		this._properties = properties
	}

	public abstract serialize (version: ProtocolVersion): Buffer
}

export abstract class WritableCommand<T> extends BasicWritableCommand<Partial<T>> {
	public static readonly MaskFlags?: { [key: string]: number }

	public flag: number

	constructor () {
		super({})

		this.flag = 0
	}

	public updateProps (newProps: Partial<T>): boolean {
		return this._updateProps(newProps)
	}

	protected _updateProps (newProps: { [key: string]: any }): boolean {
		const maskFlags = (this.constructor as any).MaskFlags as { [key: string]: number }
		let hasChanges = false
		if (maskFlags) {
			for (const key in newProps) {
				const key2 = key as keyof T
				if (key in maskFlags) {
					this.flag = this.flag | maskFlags[key]
					this._properties[key2] = newProps[key]
					hasChanges = true
				}
			}
		}
		return hasChanges
	}

}
