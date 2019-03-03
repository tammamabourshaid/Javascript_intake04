function fromPairs(array) {

    let object = {};

    array.forEach(element => {
        object[element[0]] = element[1];
    });

    return object;
}

module.exports = { fromPairs };