function getMinMaxNumber(array) {

    const min = Math.min(...array);
    const max = Math.max(...array);
    let minMax = [];
    minMax.push(min);
    minMax.push(max);
    return minMax;
}


module.exports = { getMinMaxNumber };