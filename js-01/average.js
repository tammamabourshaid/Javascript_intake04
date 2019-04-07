function getAverage(array) {

    const avg = array.reduce((a, b) => a + b) / array.length;
    return avg;
}
getAverage([5, 10, 11, 1, 3]);

module.exports = { getAverage };

// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
