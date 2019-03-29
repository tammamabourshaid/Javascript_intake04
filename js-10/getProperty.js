const getProperty = function (object, key) {
    if(object[key] === undefined){
        return null;
    }
    return object[key];
}

module.exports = { getProperty }