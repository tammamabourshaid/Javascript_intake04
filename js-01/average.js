function getAverage(array) {
    const avg = array.reduce((a, b) => a + b) / array.length;
    return avg;
}
getAverage([5, 10, 11, 1, 3]);

module.exports = { getAverage };