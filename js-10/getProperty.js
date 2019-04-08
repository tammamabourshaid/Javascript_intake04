function getProperty(object, key) {
    let keys = object[Object.keys(object).find(element => element === key)];
    if (keys == null) {
        return null;
    }
    return keys;
}
module.exports = {
    getProperty
};