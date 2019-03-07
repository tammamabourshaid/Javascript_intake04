const getFrequencyTable = (array) => {
  let frequency = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    frequency[item] = (frequency.hasOwnProperty(item)) ? frequency[item] + 1 : 1;
  }
  return frequency;
};

module.exports = {
  getFrequencyTable
};