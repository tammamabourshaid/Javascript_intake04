// function isPalindrome(number) {

//     let reversedNumber = number.toString()
//         .split('').reverse().join('');
//     if (number === reversedNumber) {
//         true;
//     }
//     false;
// }

// module.exports = { isPalindrome };

function isPalindrome(number) {
    if (number.toString() === number.toString().split("").reverse().join(""))
        return true;
}
module.exports = { isPalindrome };