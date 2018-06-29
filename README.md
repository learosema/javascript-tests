# javascript-tests
A comparison of test frameworks in javascript

In this repo, I am going to experiment with several test frameworks that are available in JavaScript. 
On my machine, I am using the current LTS version of node in a Windows environment, but other platforms with node versions >= v8.11.3 should work fine. 

For bundling and transpilation, I'm using `babel` and the [parceljs bundler](https://parceljs.org).

## running the example

Type `npm install` to install the dependencies and then type `npm start`.
Alternatively, you can also just browse to https://terabaud.github.io/javascript-tests/ and hit F12.

## What are we going to test?

For now, we are going to test a pretty boring [math.js](https://github.com/terabaud/javascript-test/math.js) library.

## Testing

Type `npm test`.

### tape

[tape](https://github.com/substack/tape) is a simple testing framework that produces TAP output. TAP is a standardized protocol for automated tests. 

To use tape in your project, install [tape](https://npmjs.com/package/tape), [babel-tape-runner](https://npmjs.com/package/babel-tape-runner) along with a babel preset like [babel-preset-env](https://npmjs.com/package/babel-preset-env). To beautify the output, [faucet](https://github.com/substack/faucet) is used.
To run the test via `npm test`, change the package.json scripts/test field to: `babel-tape-runner test/test.tape.js | faucet`

No other configuration is needed.

