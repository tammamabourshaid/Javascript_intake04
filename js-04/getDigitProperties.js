
function getDigitProperties(object) {
    let values = [];
    let testValue = /[0-9]/;  //Match items in ranges
    for (const property in object) {

        if (testValue.test(property)) {      /** test - Returns a copy of the text of the regular expression pattern.*/

        values.push(property);
        }
    }
    return values;
}

module.exports = {
    getDigitProperties
};
