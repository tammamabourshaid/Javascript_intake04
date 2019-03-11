function isPalindrome(number) {
  const numberArray = number.toString();
  let palindrome = 0;
  for (let i = numberArray.length - 1; i >= 0; i--) {
    const exponentiation = Math.pow(10, i);
    palindrome += parseInt(numberArray[i], 10) * exponentiation;
  }

  return palindrome === number;
}

module.exports = { isPalindrome };
