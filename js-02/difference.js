function getDifference(array1, array2) {
    let mutualElements = [];

    array1.forEach(element => {
        if (!array2.includes(element)) {
            mutualElements.push(element);
        }

    });
    array2.forEach(element => {
        if (!array1.includes(element)) {
            mutualElements.push(element);
        }

    });
    return mutualElements;
}

module.exports = { getDifference };


// both of the loops check if an element is present in on array and is
// not in the second and it put that element in a new mutual array