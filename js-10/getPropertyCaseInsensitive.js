const getProperty = function (object, string) {

    for (let property in object) {

        if (property.toLowerCase() === string.toLowerCase()) {
            return object[property];
        }
    }
}

module.exports = { getProperty }