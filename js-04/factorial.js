function factorial(number) {

    let result = 1;

    if (number === 0) {
        return 1;
    }
    while (number > 0) {
        result = number * result;
        number = number - 1;
    }
    return result;
}

console.log(factorial(9));

module.exports = { factorial };