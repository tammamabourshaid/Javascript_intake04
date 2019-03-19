const stringCallback = (name, callback) => setTimeout(() => callback(`Hello ${name}`), 500);

const stringCallbackAsPromise = name => new Promise(resolve => stringCallback(name, resolve));

module.exports = { stringCallback, stringCallbackAsPromise };