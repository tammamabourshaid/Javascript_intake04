function transform(array, fn) {

    let transformed = [];

    array.forEach(element => {
        transformed.push(fn(element));
    });

    return transformed;
}

module.exports = { transform };