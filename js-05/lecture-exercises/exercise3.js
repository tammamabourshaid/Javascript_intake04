const callback = (number, callback) => {
  setTimeout(() => {
    callback(number);
  }, 1000);
};

const promise = number => {
  return new Promise(resolve => callback(number, resolve));
};

const asyncFn = async number => {
  return await promise(number);
};

const combineBothPromises = (resolve1, resolve2) => {
  const combined = Promise.all([resolve1, resolve2]);

  return combined;
};

const test = combineBothPromises(promise(1), asyncFn(5))
  .then(element => element.reduce((digit1, digit2) => digit1 + digit2))
  .then(element => console.log(element));