
const filter = (array, filterFn) => {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if(filterFn(el) === true) {
      filteredArray.push(el)
    }
  }
  return filteredArray;
}



module.exports = {
  filter
}