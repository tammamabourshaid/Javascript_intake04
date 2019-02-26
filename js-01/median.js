function getMedian(array) {

    let median;

    if (array.length === 0) {
        return "Array is empty";
    }
    else if (isLengthEven(array)) {
        const numberOne = array[array.length / 2 - 1];
        const numberTwo = array[array.length / 2];
        median = (numberOne + numberTwo) / 2;
    }
    else {
        const divident = array.length - 1;
        const medianPosition = divident / 2;
        median = array.sort()[medianPosition];
    }
    return median;
}

function isLengthEven(array) {
    return array.length % 2 == 0;
}

module.exports = { getMedian };