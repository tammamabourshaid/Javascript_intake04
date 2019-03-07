const toPairs = object => {
  // let pair = [];

  // for (let property in object) {
  //   pair.unshift([property, object[property]]);
  // }

  // const sortedPair = pair.sort((key1, key2) => key2[1] - key1[1]);

  // return sortedPair;

  const entries = Object.entries(object),
    pairs = entries.sort((key1, key2) => key2[1] - key1[1]);

  return pairs;
};

module.exports = { toPairs };