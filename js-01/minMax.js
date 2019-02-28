function getMinMaxNumber(numbers) {
  let maxNumber = numbers[0];
  let minNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number > maxNumber) {
      maxNumber = number;
    }
    if (number < minNumber) {
      minNumber = number;
    }
  }

  return [minNumber, maxNumber];
}

module.exports = { getMinMaxNumber };

