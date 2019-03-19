function mapCallbackToPromise(fn) {
    const transformFn= function (...args) {
        return new Promise(resolve => fn (...args,resolve))
    }
    return transformFn;
};

module.exports= {mapCallbackToPromise};
