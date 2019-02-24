function getFrequencyTable(array) {
    array.map(e => e + " :" + e.key);
}

module.exports = { getFrequencyTable };