function getAverage(numbers){
  return numbers.reduce((a, b) => a + b) / numbers.length;
}

  module.exports = {getAverage};
