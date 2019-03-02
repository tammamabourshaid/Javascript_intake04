const getMinMaxNumber = array => {
    const minNumber = Math.min(...array),
        maxNumber = Math.max(...array),
        minMax = [minNumber, maxNumber];

    return minMax;
};

module.exports = { getMinMaxNumber };