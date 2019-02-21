const getMinMaxNumber = (array) => {
    const minNumber = Math.min(...array);
    const maxNumber = Math.max(...array);
    const minMax = [];
    minMax.push(minNumber, maxNumber);
    return minMax;
};

module.exports = { getMinMaxNumber };