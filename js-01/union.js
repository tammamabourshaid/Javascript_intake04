const getUnion = (array1, array2) => {
    const sortedArray1 = sort(array1),
        sortedArray2 = sort(array2),
        union = isSimilar(sortedArray1, sortedArray2);

    return union;
};

const sort = array => {
    const sorted = array.sort((digit1, digit2) => (digit1 - digit2));
    
    return sorted;
};

const isSimilar = (array1, array2) => {
    const union = array1.filter(digit => array2.includes(digit));

    return union;
};

module.exports = { getUnion };