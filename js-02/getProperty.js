function getProperty(obj, string) {

    let keys = string.split(".");
    let object = obj;
    let key = keys.shift();

    if (!object[key]) {
        return null;
    }
    while (typeof object[key] === "object") {
        object = object[key];
        key = Object.getOwnPropertyNames(object);

        if (!object[key]) {
            return null;
        }
    }

    return object[key];
}

module.exports = { getProperty };