function isPalindrome(number){

    let numberString = number.toString();
    let letters = numberString.split("");
    let reversedLetters = letters.reverse();
    let reversedNumber = "".concat.apply("", reversedLetters);

    if(numberString === reversedNumber){
        return true;
    }
    return false;
}

module.exports = {isPalindrome};