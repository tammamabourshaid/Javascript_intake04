function isPrime(number) {


  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  for (var i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

}


module.exports = { isPrime };


//google code!