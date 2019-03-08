function getDigitProperties(object) {
    let values = [];
    let testValue = /[1-9]/;
    for (const property in object) {

        if (testValue.test(property)) {
            values.push(property);
        }
    }
    return values;
}

module.exports = {
    getDigitProperties
};