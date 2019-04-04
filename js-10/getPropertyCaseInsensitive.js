const getProperty = (object, string) => {

    let result = "";
    Object.keys(object).forEach(property => {
        if (property.toLowerCase() === string.toLowerCase()) {
            result = object[property];
        }
    });
    return result;
}

module.exports = { getProperty }