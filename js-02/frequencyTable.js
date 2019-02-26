const getFrequencyTable = array => {
  const size = array.length,
    frequency = {},
    count = [];

  for (let times = 0; times < size; times++) {
    const item = array[times];
    count[item] = (!frequency.hasOwnProperty(item)) ? 1 : count[item] + 1;
    frequency[item] = count[item];
  }

  return frequency;
}

module.exports = { getFrequencyTable };
