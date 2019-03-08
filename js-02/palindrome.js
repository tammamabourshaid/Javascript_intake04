

const isPalindrome = (number) => {

    let reversedNumber = number.toString().split("").reverse().join("");
    if(number.toString() === reversedNumber){
        return true;
    }
}





45345
module.exports = {isPalindrome};