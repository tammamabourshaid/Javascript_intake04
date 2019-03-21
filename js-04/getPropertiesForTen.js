function getPropertiesForTen(object) {

    let property = [];
    let keys = Object.keys(object);

    keys.forEach(key => {
        if (object[key].constructor === String) {
            // return;
            }
        else if (parseInt(key) + parseInt(object[key]) === 10) {
            property.push(key);
        }
    });

    return property;

}

module.exports = { getPropertiesForTen };