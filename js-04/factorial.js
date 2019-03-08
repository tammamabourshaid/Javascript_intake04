function factorial(number) {

    let value = 1;
    for (let i = 2; i <= number; i++)
        value = value * i;
    return value;
}


module.exports = { factorial };