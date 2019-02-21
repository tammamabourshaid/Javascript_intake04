const getUnion = (array1, array2) => {

    const sortedFirstArray = array1.sort((first, second) => first - second);
    const secondArraySorted = array2.sort((first, second) => first - second);
    return sortedFirstArray.filter(number => secondArraySorted.includes(number));
};
module.exports = { getUnion };