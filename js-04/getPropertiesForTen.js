
function getPropertiesForTen(object) {

    let keys = Object.keys(object);
    let values = Object.values(object);
    let results = [];

    for (let index1 = 0; index1 < keys.length; index1++) {
        let elementK = keys[index1];

        for (let index2 = 0; index2 < values.length; index2++) {
            let elementV = values[index2];

            if (parseInt(elementK) + elementV === 10) {
                results.push(elementK);
                break;
            }

        }
    }
    return results;
}



module.exports = { getPropertiesForTen };