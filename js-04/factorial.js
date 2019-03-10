function factorial(number) {
    return number ? number * factorial(number - 1) : 1;
}
module.exports = {
    factorial
};


//found this on google instead of loop.

// function factorial(number) {

//     let result = 1;

//     if (number === 0) {
//         return 1;
//     }
//     while (number > 0) {
//         result = number * result;
//         number = number - 1;
//     }
//     return result;
// }