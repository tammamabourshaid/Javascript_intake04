const pipe = array => {
  const arraySize = array.length;

  if (arraySize <= 0) {
    return 0;
  }
  const initial = array.shift(),
    additional = array,
    additionalSize = additional.length;

  let result = initial();

  for (let times = 0; times < additionalSize; times++) {
    result = additional[times](result);
  }

  return result;
};

module.exports = { pipe };