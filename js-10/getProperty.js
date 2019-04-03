function getProperty(object, name) {

    if (!object.hasOwnProperty(name)) {
        return null;
    }
    return object[name];
gi
}
module.exports = { getProperty };