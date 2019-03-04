function getMedian(numbers) {

  numbers.sort((a, b) => {
    return a-b;
  });

  if (numbers.length % 2 === 0) {

    const left = numbers.length / 2;

    return (numbers[left - 1] + numbers[left]) / 2;

  } else {

    return numbers[numbers.length / 2 - 0.5];

  }

}



module.exports = { getMedian };