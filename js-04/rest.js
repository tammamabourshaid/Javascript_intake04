const rest = (numbers) => {
  const result = [];
  for (let i = 1; i < numbers.length; i++) {
    result.push(numbers[i]);
  }
  return result;
};

module.exports = {
  rest
};