function getUnion(array1, array2) {
    const sortedArray1 = array1.sort((e1, e2) => { return e1 - e2 });
    const sortedArray2 = array2.sort((e1, e2) => { return e1 - e2 });
    const unionNumbers = sortedArray1.filter(number => sortedArray2.includes(number));
    return unionNumbers;
}
module.exports = { getUnion };