function fromPairs(array) {

    let object = {};

    array.forEach(e=> {
        object[e[0]] = e[1];
    });

    return object;
}

module.exports = { fromPairs };