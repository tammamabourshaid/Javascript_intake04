const getMinMaxNumber = (array) => {
  const max = Math.max.apply(null, array)
  const min = Math.min.apply(null, array)
  return [min, max]
}

module.exports = {
  getMinMaxNumber
}