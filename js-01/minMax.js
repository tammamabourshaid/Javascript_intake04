
const getMinMaxNumber = (array) => {
    const minMax = [],
    min = Math.min(...array),
    max = Math.max(...array);

    minMax.push(min);
    minMax.push(max);

    return minMax;
};


module.exports = {getMinMaxNumber};