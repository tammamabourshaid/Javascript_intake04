const getAverage = numbers => {
    const size = numbers.length;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = numbers.reduce(reducer);
    const average = sum / size;
    return average;
};

module.exports = { getAverage };