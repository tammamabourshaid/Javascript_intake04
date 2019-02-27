const getDifference = (array1, array2) => {
    const concadenatedArray = concatenate(array1, array2),
        sortedConcatenatedArray = sort(concadenatedArray)
    uniqueNumbers = getUniqueNumbers(sortedConcatenatedArray);

    return uniqueNumbers;
};

const sort = array => {
    const sortedArray = array.sort((digit1, digit2) => digit1 - digit2);
    return sortedArray;
};

const getUniqueNumbers = array => {
    const uniqueNumbers = array.filter((digit) => {
        return array.indexOf(digit) === array.lastIndexOf(digit);
    });
    return uniqueNumbers;
};

const concatenate = (array1, array2) => {
    const concatenatedArray = array1.concat(array2);
    return concatenatedArray;
};
module.exports = { getDifference };