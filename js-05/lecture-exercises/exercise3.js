const promise = number => {
  return new Promise(resolve => resolve(number));
};

const asyncFn = async number => {
  return await promise(number);
};

const combineBothPromises = async (resolve1, resolve2) => {
  const combined = await Promise.all([resolve1, resolve2]);

  return combined;
};

const test = combineBothPromises(promise(1), asyncFn(5))
  .then(element => element.reduce((digit1, digit2) => digit1 + digit2))
  .then(element => console.log(element));