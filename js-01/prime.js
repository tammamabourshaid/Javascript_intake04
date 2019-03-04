function isPrime(value) {

    for (let i = 2; i < value - 1; i++) {  
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  }
  module.exports = { isPrime }; 