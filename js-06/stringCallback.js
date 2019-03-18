const stringCallback = (name, callback) => {
  setTimeout(() => {
    callback(`Hello ${name}`);
  }, 500);
};

const stringCallbackAsPromise = name => {
  return new Promise(resolve => resolve(`Hello ${name}`));
}

module.exports = { stringCallback, stringCallbackAsPromise };