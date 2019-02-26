function getAverage(array) {

    const divisor = array.length;
    let total = 0;

    for (let position = 0; position < array.length; position++) {
        const number = array[position];
        total = total + number;
    }
    return total / divisor;
}

module.exports = { getAverage };