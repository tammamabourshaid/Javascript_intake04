const isPalindrome = number => {
  const numberString = number.toString(),
    split = numberString.split(""),
    reverse = split.reverse().join(""),
    palindrome = numberString === reverse;

  return palindrome;
};

module.exports = { isPalindrome };
