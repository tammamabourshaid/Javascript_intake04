const callback = callback => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const promise = (greeting, someone) => {
  return new Promise(resolve => {
    resolve(`${greeting} ${someone}`);
  });
};

promise("Hello", "girl!").then(value => {
  console.log(value);
});