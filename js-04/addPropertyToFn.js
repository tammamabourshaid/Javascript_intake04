function addPropertyToFn(fn, name, value) {
    return fn[name] = value;
}

module.exports = { addPropertyToFn };