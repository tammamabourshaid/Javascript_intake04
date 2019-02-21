function getAverage(Array) {
    return Array.reduce((a, b) => a + b) / Array.length;
}
module.exports = { getAverage };