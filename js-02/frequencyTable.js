function getFrequencyTable(array) {
  array.map(element => element + " :" + element.key);
}

module.exports = { getFrequencyTable };

