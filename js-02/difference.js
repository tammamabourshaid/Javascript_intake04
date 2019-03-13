

function getDifference(arr1, arr2) {

   const a1 = arr1.concat(arr2)
   const sorted = a1.sort((a, b) => a - b)
   const result = sorted.filter(e => sorted.indexOf(e) === sorted.lastIndexOf(e))

   console.log(result);

   return result;
}
module.exports = { getDifference };

// function getDifference(arr1, arr2) {
//    const newArray = [];

//    arr1.forEach((e1) => arr2.forEach((e2) => {
//       if (e1 !== e2) {
//          newArray.push(e1)
//       } else if (e1 === e2) {
//          newArray.push(e2);
//       }
//    }));
//    console.log(newArray);

//    return newArray.filter(e => e!==e);
// }
// module.exports = { getDifference };