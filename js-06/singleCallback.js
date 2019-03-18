const singleCallback = callback => {
  setTimeout(() => {
    callback(1);
  }, 500);
};

const singleCallbackAsPromise = () => {
  return new Promise(resolve => resolve(1));
};

module.exports = { singleCallback, singleCallbackAsPromise };