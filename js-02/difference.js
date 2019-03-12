
function getDifference(arr1, arr2) {

   const a1 = arr1.concat(arr2)
   const sorted = a1.sort((a, b) => a - b)
   const result = sorted.filter(e => sorted.indexOf(e) === sorted.lastIndexOf(e))

   console.log(result);

   return result;
}
module.exports = { getDifference };