
const getProperty = (object, string) => {
    let result = [];

    Object.keys(object).forEach(property => {
        if (property.startsWith(string)) {
            result.push(object[property]);
        }
    })
    if (result.length > 1) {
        return result;
    }
    else {
        return result[0];
    }

}




module.exports = { getProperty };