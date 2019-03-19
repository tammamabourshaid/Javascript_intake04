function addPropertyToFn(fn, key, value) {
    return fn[key] = value;
}
module.exports = { addPropertyToFn };