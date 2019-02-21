
const name = "badi";

function isPalindrom(name){
let palindrom = name.split("").reverse().join();
console.log(palindrom);
return palindrom;

}
module.exports={isPalindrom};