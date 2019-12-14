# ATEM connection library

This is a testing ground for [atem-connection](https://github.com/nrkno/tv-automation-atem-connection)

As such it will often be far ahead in some areas, but behind in others compared to atem-connection.

## Technology highlights
- Typescript
- Yarn
- Jest
- standard-version
- codecov

## Installation

For usage by library consumers installation is as easy as:
```sh
yarn add atem-connection
```

For library developers installation steps are as following:
```sh
git clone https://github.com/nrkno/tv-automation-atem-connection
yarn
yarn build
```

If you want to make a contribution, feel free to open a PR.

## Usage

```javascript
const { Atem } = require('atem-connection')
const myAtem = new Atem({ externalLog: console.log })

myAtem.connect('192.168.168.240')

myAtem.on('connected', () => {
	myAtem.changeProgramInput(3).then(() => {
		// Fired once the atem has acknowledged the command
		// Note: the state likely hasnt updated yet, but will follow shortly
		console.log('Program input set')
	})
	console.log(myAtem.state)
})

myAtem.on('stateChanged', (state, pathToChange) => {
  console.log(state); // catch the ATEM state.
});
```

### Events

- `connected`
This event will be fired once we have connected with the ATEM.

- `disconnected`
Whenever the connection to the ATEM fails and does not recover within 5 seconds this is called.

- `stateChanged(state, path)`
Whenever a packet from the ATEM is received that changes the state, this event will be fired.
The path parameter is a path into the state that represents the change, to allow for filtering of events. eg video.ME.0.programInput

- `receivedCommand(command)`
Whenever a packet from the ATEM is received that contains a command, this event will be fired.
This should not be relied on in most usage, as the commands can and will have breaking changes in patch releases. This event is needed for some use cases, so if this is used you should likely pin the version down to a specific patch release to ensure nothing breaks.

## Debug

Set `debug=true` config option in order to see raw packets. This is especially useful for library developers.
```javascript
const myAtem = new Atem({ debug: true, externalLog: console.log })
```
```sh
SEND <Buffer 10 14 53 ab 00 00 00 00 00 3a 00 00 01 00 00 00 00 00 00 00>
SEND <Buffer 80 0c 53 ab 00 00 00 00 00 03 00 00>
SEND <Buffer 80 0c 53 ab 00 00 00 00 00 03 00 00>
SEND <Buffer 80 0c 80 0f 00 01 00 00 00 41 00 00>
RECV <Buffer 00 0c 90 60 5f 76 65 72 00 02 00 10>...
```

## Test

This module run tests with jest.
```sh
$ yarn unit
```
There is a suite of generated serialization tests, using [atem-connection-test-generator](https://github.com/LibAtem/atem-connection-test-generator) as the [LibAtem](https://github.com/LibAtem) project has tests to verify its serialization against the Blackmagic Atem SDK
