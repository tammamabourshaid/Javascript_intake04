function isPalindrome(word) {

    let reversedword = word.toLowerCase()
        .split('').reverse().join('');
    if (word === reversedword) {
        return "isPalindrome"
    }
    return "is not Palindrome";
}

module.exports = { isPalindrome };