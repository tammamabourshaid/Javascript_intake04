const getFrequencyTable = array => {
  const object = {};
  const reducer = ((accumulator, currentValue) =>
    (accumulator[currentValue] = ++accumulator[currentValue] || 1, accumulator)),
    frequency = array.reduce(reducer, object);

  return frequency;
}

module.exports = { getFrequencyTable };