# javascript-tests
A comparison of test frameworks in javascript

In this repo, I am going to experiment with several test frameworks against a simple math.js library and make a comparison of these.
For simplicity, I'm not going to use babel transpilation or bundling. 

This demo is using [ES6 modules directly in the browser](https://jakearchibald.com/2017/es-modules-in-browsers/). 
You will need [a browser with module support](https://caniuse.com/#search=modules).

I am using the current LTS version of node, v8.11.3. ES module support is hidden behind the flag `--experimental-modules`, so I'm running the tests through `babel`.

## running the example

Type `npm start` to run the example in the console.

To run the demo in the browser, type `npm install` to install the dependencies. Then, type `npm run browser`, browse to http://localhost:8080/ and hit F12.

You can also just browse to https://terabaud.github.io/javascript-tests/ and hit F12.

## Testing

Type `npm test`.

### tape

To add tape for testing, (I think) babel is needed

[tape](https://github.com/substack/tape) is a simple testing framework that produces TAP output. TAP is a standardized protocol for automated tests. To beautify the output, [faucet](https://github.com/substack/faucet) is used.

For ES6 module support, the tests are run through [babel](https://babeljs.com) via `babel-tape-runner`, using the `env` preset.


