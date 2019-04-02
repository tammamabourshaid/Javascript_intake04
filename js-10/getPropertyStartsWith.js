function getProperty(object, string) {

    let values = [];

    for (let property in object) {

        if (property.includes(string)) {
            values.push(object[property]);
        }
    }
    if (values.length > 1) {
        return values;
    }
    else {
        return values[0];
    }

}

module.exports = { getProperty }