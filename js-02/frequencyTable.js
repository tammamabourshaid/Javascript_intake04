const getFrequencyTable = (array) => {
    let frequency = {};
    let count = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        count[item] = (!frequency.hasOwnProperty(item)) ? 1 : count[item] + 1;
        frequency[item] = count[item];
    }
    return frequency;
};
module.exports = {getFrequencyTable};