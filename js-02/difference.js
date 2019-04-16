const getDifference = (array1, array2) => {
  const concatenatedArray = concatenate(array1, array2),
    sortedConcatenatedArray = sort(concatenatedArray),
    uniqueNumbers = getUniqueNumbers(sortedConcatenatedArray);

  return uniqueNumbers;
};

const concatenate = (array1, array2) => {
  const concatenatedArray = array1.concat(array2);

  return concatenatedArray;
};

const sort = array => {
  const sortedArray = array.sort((digit1, digit2) => digit1 - digit2);

  return sortedArray;
};

const getUniqueNumbers = array => {
  const uniqueNumbers = array.filter(digit =>
    (array.indexOf(digit) === array.lastIndexOf(digit)));

  return uniqueNumbers;
};

module.exports = { getDifference };