const numberAsPromise = () => {
  return new Promise(resolve => resolve(5));
};

const numberAsCallback = callback => {
  setTimeout(() => {
    callback(1);
  }, 1000);
};

module.exports = { numberAsPromise, numberAsCallback };