
// const name = "54345";

// function isPalindrom(name){
// let palindrom = name.split("").reverse().join();
// console.log(palindrom);
// return palindrom;


// var isPalindrome = function (string) {
//     if (string == string.split('').reverse().join('')) {
//         alert(string + ' is palindrome.');
//     }
//     else {
//         alert(string + ' is not palindrome.');
//     }
// }

//function isPalindrome(s) {
//    return s == s.split("").reverse().join("") ? true : false;
//}

function isPalindrome(number){
    let reversedNumber = number.toString().split("").reverse().join("");
    if (number.toString()===reversedNumber){
        return true;
    }
}

module.exports={isPalindrome};