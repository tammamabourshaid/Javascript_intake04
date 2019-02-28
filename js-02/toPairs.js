const toPairs = object => {
  let pair = [];

  for (let property in object) {
    pair.unshift([property, object[property]]);
  }

  const sortedPair = pair.sort((key1, key2) => key2[1] - key1[1]);

  return sortedPair;
};

module.exports = { toPairs };