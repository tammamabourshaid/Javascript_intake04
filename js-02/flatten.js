const flatten = array => {
  return flattenArray(array);
};

const flattenArray = someArray => {
  const array = [],
    reducer = (accumulator, currentValue) =>
      accumulator.concat(
        isArray(currentValue) ? flattenArray(currentValue) : currentValue),
    flatten = someArray.reduce(reducer, array);

  return flatten;
};

const isArray = array => {
  const isArray = Array.isArray(array)
  return isArray;
};

module.exports = { flatten };
