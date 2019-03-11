const fromPairs = (array) => {
  const obj = {};
  array.map(el => obj[el[0]] = el[1])
  return obj;
};

module.exports = {
  fromPairs
};  