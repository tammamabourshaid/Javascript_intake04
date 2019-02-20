function isPrime(number){
    if(number == 1 || number == 2) return true;
    for (let modulo = 2; modulo < number; modulo++) {
        if(number % modulo == 0) return false; 
    }
    return true;
}

module.exports = {isPrime};