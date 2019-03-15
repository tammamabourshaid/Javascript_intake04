const callback = (name, callback) => {
  setTimeout(() => {
    callback(`Hello ${name}`);
  }, 1000);
};

const promise = () => {
  return new Promise(resolve => {
    callback("Alexa", resolve);
  });
};

const asynFn = async () => {
  const promise = await promise();

  return promise;
};

asynFn().then(e => console.log(e));