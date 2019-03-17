function getPropertiesForTen(object) {

    let propsMake10 = [];
    let keys = Object.keys(object);

    keys.forEach(key => {
        if (object[key].constructor === String) {
            return;
        }
        else if (parseInt(key) + parseInt(object[key]) === 10) {
            propsMake10.push(key);
        }
    });

    return propsMake10;

}

module.exports = { getPropertiesForTen };