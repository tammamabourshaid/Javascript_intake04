function getAverage(array) {


    return array.reduce((a, b) => a + b) / array.length;

}
module.exports = { getAverage };


