function permutate(array) {
    if (array.length < 2) {
        return [array];
    }
    let result = [];
    array.forEach((x, i) => permutate(array.slice(0, i).concat(array.slice(i + 1))).forEach((a) =>
        result.push([x].concat(a))));

    return result;
}

module.exports = { permutate };