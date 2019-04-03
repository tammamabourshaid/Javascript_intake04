function getProperty(object, name) {
    let arrResult = [];
    for (let key in object) {
        if (key.indexOf(name) !== -1) {
            arrResult.push(object[key]);
        }

    }
    if (arrResult.length <= 1) {
        arrResult = arrResult[0];
    }
    console.log(arrResult);
    
    return arrResult;
}

module.exports = { getProperty };