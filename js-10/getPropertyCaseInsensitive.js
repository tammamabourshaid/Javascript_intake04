function getProperty(object, key) {
    return object[Object.keys(object)
        .find(element => element.toLowerCase() === key.toLowerCase())
    ];
}

module.exports = {
    getProperty
};