const isPalindrome = number => {
    let numberString=number.toString()
    .split('').reverse().join('');

    if(number === numberString){
        return true;
    }
   return false;
}
module.exports={isPalindrome};