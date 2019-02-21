function isPalindrome(number) {
    
    let reversednumber = number.toString()
        .split('').reverse().join('');
    if (number === reversednumber) {
        return "toBeTruthy"
    }
    return "toBeFalsy";
}

module.exports = { isPalindrome };