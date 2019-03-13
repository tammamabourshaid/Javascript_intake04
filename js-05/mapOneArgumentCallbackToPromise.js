const mapOneArgumentCallbackToPromise = function (fn) {
    return function(argument) {
        return new Promise(resolve => fn(argument, resolve))
    }
};


  

module.exports = {mapOneArgumentCallbackToPromise};