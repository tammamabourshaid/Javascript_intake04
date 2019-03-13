const mapOneArgumentCallbackToPromise = fn => {
  const mapOneArgument = argument => {
    return new Promise(callback => {
      fn(argument, callback);
    });
  };

  return mapOneArgument;
};

module.exports = { mapOneArgumentCallbackToPromise };