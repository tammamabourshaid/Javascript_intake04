const getAverage = numbers => {
    const size = numbers.length,
        reducer = (accumulator, currentValue) => accumulator + currentValue,
        sum = numbers.reduce(reducer),
        average = sum / size;
    return average;
};

module.exports = { getAverage };