function transform(numbers, fn) {
    let result = [];
    numbers.forEach(element => {

        result.push(fn(element));
    });
    return result;
}

module.exports = {
    transform
};