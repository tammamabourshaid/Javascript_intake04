const oldSchoolCallback = callback => {
  setTimeout(() => {
    callback(1);
  }, 1000);
};

const callbackPromise = () => {
  return new Promise(resolve => {
    oldSchoolCallback(resolve);
  });
};

const callBackAsync = async () => {
  return await callbackPromise();
};

callBackAsync().then(value => {
  console.log(value);
});