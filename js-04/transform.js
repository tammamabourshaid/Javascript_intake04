const transform = (array, fn) => {
  const transformed = [];

  array.forEach(position => {
    transformed.push(fn(position));
  });

  return transformed;
};

module.exports = { transform };