function getDifference(array1, array2) {
    let mutualElements = [];
    array1.forEach(element => {
        if (!array2.includes(element))
            mutualElements.push(element);

    });
}



module.exports = { getDifference };