function getAverage(numbers){
    const divisor = numbers.length;
    let sum = 0;
    for (let position = 0; position < numbers.length; position++) {
        const number = numbers[position];
        sum = sum + number;
    }
    return sum / divisor;
}



module.exports = {getAverage};