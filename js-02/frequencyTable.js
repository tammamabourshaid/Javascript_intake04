const getFrequencyTable = array => {
  const object = {};
  const reducer = ((accumulator, currentValue) => {
    return (accumulator[currentValue] = ++accumulator[currentValue] || 1, accumulator)
  }),
    frequency = array.reduce(reducer, object);

  return frequency;
}

module.exports = { getFrequencyTable };