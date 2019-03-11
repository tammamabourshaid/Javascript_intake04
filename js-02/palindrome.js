function isPalindrome(number) {
    if (number.toString() === number.toString().split("").reverse().join(""))
        return true;
}
module.exports = { isPalindrome };