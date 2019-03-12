function addPropertyToFn(fn, property, value) {

    return fn[property] = value;
}

module.exports = { addPropertyToFn };