function pipe(functions) {
  return functions.reduce((accumulator, fn) => fn(accumulator), 0);
}

module.exports = { pipe };
