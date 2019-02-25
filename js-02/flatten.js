const flatten = array => {
  return flattenArray(array);
};

const flattenArray = array => {
  const flatten = array.reduce(
    (accumulator, currentValue) =>
      accumulator.concat(
        isArray(currentValue) ? flattenArray(currentValue) : currentValue),[]);
        
  return flatten;
};

const isArray = array => {
  return Array.isArray(array);
};

module.exports = { flatten };