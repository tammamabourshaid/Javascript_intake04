const getUnique = (values) => {
  /* TO EXPLAIN */
  values.filter((el, idx, array) => {
    if(array.indexOf(el) === idx) {
      return el;
    }
  }).sort((a, b) => a - b);
  // return values.filter((el, idx, array) => array.indexOf(el) === idx).sort((a, b) => a - b);
}
getUnique([1, 2, 3, 1, 2, 4]);
module.exports = {
  getUnique
}