const reduce = (input, fn) => {
  let initial = input[0];
  for (let i = 1; i < input.length; i++) {
    initial = fn(initial, input[i]);
  }
  return initial;
};

module.exports = {
  reduce
};