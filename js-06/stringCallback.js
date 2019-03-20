const stringCallback = function (text, callback) {
    callback(`Hello ${text}`);
}
const stringCallbackAsPromise = function (text) {
    return new Promise(resolve => resolve(`Hello ${text}`));
}

module.exports = { stringCallback, stringCallbackAsPromise }