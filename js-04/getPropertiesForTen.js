function getPropertiesForTen(object) {

    let propertiesForTen = [];
    let keys = Object.keys(object);

    keys.forEach(key => {
        if (object[key].constructor !== String && parseInt(key) + parseInt(object[key]) == 10) {
            propertiesForTen.push(key);
        }
    });

    return propertiesForTen;

}

module.exports = { getPropertiesForTen };

