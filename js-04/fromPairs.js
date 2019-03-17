function fromPairs(array) {

    const object = {};

    array.forEach(item => {object[item[0]] = item[1];
    });
    return object;
};

module.exports = { fromPairs };
