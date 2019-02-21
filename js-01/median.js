const getMedian = numbers => {

    sort(numbers);
    const size = numbers.length;

    let indexNumber,
        formula,
        median;

    if (size % 2 === 0) {
        indexNumber = (size) / 2;
        formula = ((numbers[indexNumber] + numbers[indexNumber - 1])) / 2;
        median = formula;
        return median;
    }

    if (size % 2 === 1) {
        indexNumber = (size + 1) / 2;
        formula = numbers[indexNumber - 1];
        median = formula;
        return median;
    }
    
};

const sort = numbers => {
    const sortedNumbers = numbers.sort((first, second) => { return first - second });
    return sortedNumbers;
}

module.exports = { getMedian };