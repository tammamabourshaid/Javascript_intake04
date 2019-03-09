function factorial(number) {
    return number ? number * factorial(number - 1) : 1;
}
module.exports = {
    factorial
};


//found this on google instead of loop.