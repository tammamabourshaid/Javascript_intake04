const getUnique = array => {
  const sorted = sort(array),
    noDuplicates = getNoDuplicates(sorted);

  return noDuplicates;
};

const sort = array => {
  const sorted = array.sort((digit1, digit2) => {
    return digit1 - digit2;
  });

  return sorted;
}

const getNoDuplicates = array => {
  const set = new Set(array),
    unique = Array.from(set);

  return unique;
};

module.exports = { getUnique };