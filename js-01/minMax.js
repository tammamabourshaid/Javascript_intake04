function getMinMaxNumber(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let minMax = [];
    minMax.push(min);
    minMax.push(max);
    return minMax;
}
module.exports = { getMinMaxNumber };