function doTheThing(array) {
  return array.reduce((a, b) => Array.isArray(b) ? a.concat(doTheThing(b)) : a.concat(b), []);
}

const flatten = (array) => {
  return doTheThing(array);
};

module.exports = {
  flatten
};