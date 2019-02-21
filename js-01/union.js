const getUnion = (firstArray, secondArray) => {
    const sortedFirstArray = firstArray.sort((first, second) => first - second);
    const sortedSecondArray = secondArray.sort((first, second) => first - second);
    return sortedFirstArray.filter(number => sortedSecondArray.includes(number));
};

module.exports = { getUnion };