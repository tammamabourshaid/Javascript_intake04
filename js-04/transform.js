const transform = (array, fn) => {
  const result = [];
  array.forEach(el => {
    result.push(fn(el));
  });
  return result;
};

module.exports = {
  transform
};