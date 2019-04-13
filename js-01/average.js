
const getAverage = (array) => {

   const size = array.length;
   const reducer = (e1, e2) => (e1 + e2 );
   const sum = array.reduce(reducer);
   const average = sum / size;

   return average;
}

// const array1 = ([2, 3, 4, 5, 6]);
// console.log(getAverage(array1));

module.exports = { getAverage };

// function getAverage(array) {
//     sum = 0;
//    count = array.length;

//    for ( i = 0; i < count; i++)
//       sum = sum + array[i];
//    return sum / count;
// }

