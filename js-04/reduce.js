function reduce(array, fn) {
  let accumulator = array[0];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    accumulator = fn(accumulator, element);
  }
  return accumulator;
}

module.exports = { reduce };
