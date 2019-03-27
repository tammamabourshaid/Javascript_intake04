const getFrequencyTable = function (array) {
    
    let object = {};
    let value = 1;

    array.forEach(element => {

        if (!object.hasOwnProperty(element)) {
            object[element] = value;
        }

        else {
            object[element] ++;
        }
    });
    return object;
}

module.exports = { getFrequencyTable };