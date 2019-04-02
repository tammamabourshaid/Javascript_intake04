
function mapCallbackToPromise(fn) {
    return function(...args) {
      return new Promise(resolve => {
        const argsWithCallback = [...args, result => resolve(result)];
        fn(...argsWithCallback);
      });
    };
   }

module.exports = { mapCallbackToPromise }