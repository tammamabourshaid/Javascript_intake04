const getUnion = (array1, array2) => {
  const result = array1.filter(item => array2.includes(item))
  return result.sort();
}

module.exports = {
  getUnion
}