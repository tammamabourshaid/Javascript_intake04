function mapOneArgumentCallbackToPromise(fn) { // fn is a function that takes one arg and one function
    
        function output(arg) {
        return new Promise(resolve => {
            fn(arg, resolve);
        });
    }
    return output; //a function that returns a promise    
}

module.exports = { mapOneArgumentCallbackToPromise };