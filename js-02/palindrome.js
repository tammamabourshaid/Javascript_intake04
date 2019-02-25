const isPalindrome = (input) => {
  return input.toString().split("").reverse().join("") === input.toString()
};

module.exports = {
  isPalindrome
};