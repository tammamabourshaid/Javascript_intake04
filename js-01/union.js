

function getUnion(array1, array2) {
    let resultArray = [];

    for ( let i = 0; i < array1.length; i++ ) {
        for ( let e = 0; e < array2.length; e++ ) {
            if (array1[i] === array2[e]) resultArray.push(array1[i]);
            else if (array1[i] === array2[e * 2]) resultArray.pop(array1[i]);        
    
    }
}
    return resultArray.sort();
}






module.exports = {getUnion};