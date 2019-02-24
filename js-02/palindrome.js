function isPalindrome(number) {

    let reversedNumber = number.toString()
        .split('').reverse().join('');
    if (number === reversedNumber) {
        true;
    }
    false;
}

module.exports = { isPalindrome };