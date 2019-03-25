function mapOneArgumentCallbackToPromise(functioN) {
    function change(onlyArgument) {
        return new Promise(resolve => {
            functioN(onlyArgument, resolve);

        });
    };
    return change;
};

module.exports = {
    mapOneArgumentCallbackToPromise
};














//This function should wrap a method that awaits ONE argument
//and ONE callback to a function that returns a PROMISE.

//return change is returning the promise 
//