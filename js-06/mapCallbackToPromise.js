function mapCallbackToPromise(callbackBasedFn) {
    const transformedFn = function (...args) {
        return new Promise(function (resolve) {
            callbackBasedFn(...args, resolve);
        });
    }
    return transformedFn;
}

module.exports = { mapCallbackToPromise };