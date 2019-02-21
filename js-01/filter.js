
// function filter(array) {
//   let bigger = [];
//   let count = array.length;

//   for (let i = 0; i < count; i++)

//     if (array[i] > 10) bigger.push(array[i])
//   return bigger;

// }

// if (array[i] > 10 ? 1 : 0) {

//   return [];

// }



const filter = (array, filterFn) => {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (filterFn(el) === true) {
      filteredArray.push(el)
    }
  }
  return filteredArray;

}




module.exports = { filter };