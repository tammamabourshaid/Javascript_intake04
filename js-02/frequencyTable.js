function getFrequencyTable(values) {
    const frequencyTable = {};
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (frequencyTable[value]) {
            frequencyTable[value]++;
        } else {
            frequencyTable[value] = 1;
        }
    }

    return frequencyTable;
}

module.exports = {
    getFrequencyTable
};