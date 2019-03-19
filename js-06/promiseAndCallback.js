const numberAsCallback = callback => setTimeout(() => callback(1), 500);

const numberAsPromise = () => new Promise(resolve => resolve(5));

module.exports = { numberAsCallback, numberAsPromise };