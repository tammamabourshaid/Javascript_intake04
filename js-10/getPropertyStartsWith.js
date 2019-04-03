function getProperty(object, key) {
    //console.log(Object.keys(object));

    const keys = Object.keys(object)

    const first = keys.filter(e => e.startsWith(key))
        .map(e => object[e])
    if (first.length === 1) {

        return first.toString()
    } else {
        return first
    }
}
module.exports = {
    getProperty
}