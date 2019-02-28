// function getAverage(array) {
//     sum = 0;
//    count = array.length;

//    for ( i = 0; i < count; i++)
//       sum = sum + array[i];
//    return sum / count;
// }


const getAverage = array => {

   const size = array.length;
   const reducer = (e1, e2) => { return e1 + e2 };
   const sum = array.reduce(reducer);
   const average = sum / size;
   console.log(average);

   return average;
}
module.exports = { getAverage };