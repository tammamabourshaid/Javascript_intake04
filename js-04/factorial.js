const factorial = (int) => {
  let result = 1;
  for (let i = 1; i <= int; i++) {
    result = result * i;
  }
  return result;
};
module.exports = {
  factorial
};