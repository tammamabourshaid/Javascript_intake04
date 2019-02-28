function getProperty(object, property) {
    const split = property.split(".");
    const reducer = (accumulater, currentValue) => ((accumulater && accumulater[currentValue] || null));
    const anyProperty = split.reduce(reducer, object);

    return anyProperty;

}

module.exports = { getProperty };