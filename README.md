# Deprecate-Me

Mark your methods as deprecated, and display messages with some options.

## Installation

```bash
npm install deprecate-me
```

## Usage

```javascript
var deprecate = require('deprecate-me');
function test() {
	deprecate(); // A warning will be printed when function test will be called
}
function test2() {
	// When this function will be called, the warning will be more explicit
	// Note that all of this options are optionnal, you can omit some of them if you want
	deprecate({since: '0.2.5', removed: '1.0.0', current: '0.8.0'})
}
```

### Author

Emeraude
