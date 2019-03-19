const getProperty = (object, anyProperty) => {
    const split = anyProperty.split("."),
        reducer = ((accumulator, currentValue) => (accumulator && accumulator[currentValue]) || null),
        property = split.reduce(reducer, object);

    return property;
};



module.exports = { getProperty };