function getDifference(array1, array2) {
    let commonElements = [];

    array1.forEach(element=>{
        if (!array2.includes(element)){
            commonElements.push(element);
        }
    });
    
    array2.forEach(element => {
        if (!array1.includes(element)) {
            commonElements.push(element);
        }

    });
    return commonElements;
}

module.exports = { getDifference };
