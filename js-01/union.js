const getUnion = (array1, array2) => {
  return array1.filter(item => array2.includes(item)).sort();
}

module.exports = {
  getUnion
}