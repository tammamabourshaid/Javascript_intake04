const mapCallbackToPromise = callbackBasedFn => {
  const transformedFn = (...parameters) => {
    return new Promise(resolve => {
      callbackBasedFn(...parameters, resolve);
    });
  };

  return transformedFn;
};


module.exports = { mapCallbackToPromise };