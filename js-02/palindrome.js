const isPalindrome = number => {
    let numberString = number.toString()
        .split('').reverse().join('');

    if (number === numberString) {
        return true;
    }
    return false;
}
module.exports = {isPalindrome};

//
// const isPalindrome = (input) => {
//     return input.toString().split("").reverse().join("") === input.toString()
// };
//
// module.exports = {
//     isPalindrome
// };