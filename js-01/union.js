function getUnion(array1, array2) {
    let intersection = array1.filter(x => array2.includes(x));
    let difference = array1.filter(x => !array2.includes(x));
    let difference = array1
        .filter(x => !array2.includes(x))
        .concat(array2.filter(x => !array1.includes(x)));
    let union = [...array1, ...array2];
    return union;
}

module.exports = { getUnion };