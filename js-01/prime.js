function isPrime(input){
let divisor = 2;
let truth = true;
while (divisor < input){
    if (input%divisor === 0){truth = false}
    divisor++;
    }
return truth
}
          
module.exports = {isPrime};