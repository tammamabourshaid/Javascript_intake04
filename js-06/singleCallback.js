const singleCallback = function (callback) {
    callback(1);
}

const singleCallbackAsPromise = function () {
    return new Promise(resolve => resolve(1));
}

module.exports = { singleCallback, singleCallbackAsPromise }