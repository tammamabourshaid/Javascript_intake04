const getDigitProperties = object => {

  const keys = Object.keys(object),
    keysWithNumbers = [],
    regExNumber = /[0-9]/;

  keys.forEach(key => {
    regExNumber.test(key)
      ? keysWithNumbers.push(key) : "No keys have numbers in them";
  });

  return keysWithNumbers;
};

module.exports = { getDigitProperties };