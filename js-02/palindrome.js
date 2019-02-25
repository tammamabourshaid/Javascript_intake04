function isPalindrome(number){
   if( number.toString() === number.toString().split("").reverse().join(""))
   return true;
}
module.exports={isPalindrome};


const isPalindrome = (number) => {

    let reversedNumber = number.toString().split("").reverse().join("");
    if(number.toString() === reversedNumber){
        return true;
    }
}






module.exports = {isPalindrome};
