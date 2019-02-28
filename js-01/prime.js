function isPrime(number) {
    for(let i = 2; i < number-1; i++)
      if(number % i === 0) return false;
    return number > 1;
  }

 module.exports={isPrime};