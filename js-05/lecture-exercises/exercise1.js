const oldSchoolCallback = callback => {
  setTimeout(() => {
    callback(1);
  }, 1000);
};

const callbackPromise = number => {
  return new Promise(resolve => {
    resolve(oldSchoolCallback(number));
  });
};

const callBackAsync = async number => {
  return await number;
};

callBackAsync(1).then(value => {
  console.log(value);
});