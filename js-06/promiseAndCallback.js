const numberAsPromise = function () {
    return new Promise(resolve => resolve(5));
}

const numberAsCallback = function (callback) {
    callback(1);
}

module.exports = { numberAsCallback, numberAsPromise }