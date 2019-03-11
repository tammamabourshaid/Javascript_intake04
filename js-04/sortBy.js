const sortBy = (array, fn) => {
  return array.sort((a, b) => fn(a) > fn(b));
};

module.exports = {
  sortBy
};