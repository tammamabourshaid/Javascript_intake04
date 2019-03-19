const singleCallback = callback => setTimeout(() => callback(1), 500);

const singleCallbackAsPromise = () => new Promise(resolve => singleCallback(resolve));

module.exports = { singleCallback, singleCallbackAsPromise };