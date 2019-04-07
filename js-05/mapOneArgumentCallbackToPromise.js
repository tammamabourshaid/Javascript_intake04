function mapOneArgumentCallbackToPromise(fn) { // number3 is number2 function that takes one arg and one function

    function output(arg) {
        return new Promise(resolve => {
            fn(arg, resolve);
        });
    }
    return output; //number2 function that returns number2 number3
}

module.exports = { mapOneArgumentCallbackToPromise };