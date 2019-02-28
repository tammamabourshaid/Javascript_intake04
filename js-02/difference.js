// function getDifference (a1, a2) {

//     var a = [], difference = [];

//     for (var i = 0; i < a1.length; i++) {
//         a[a1[i]] = true;
//     }

//     for (var i = 0; i < a2.length; i++) {
//         if (a[a2[i]]) {
//             delete a[a2[i]];
//         } else {
//             a[a2[i]] = true;
//         }
//     }

//     for (var k in a) {
//         difference.push(k);
//     }

//     return difference;
// }



// function getDifference (array1, array2) {
//     var temp = [];
//     array1 = array1.toString().split(',').map(Number);
//     array2 = array2.toString().split(',').map(Number);

//     for (var i in array1) {
//     if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
//     }
//     for(i in array2) {
//     if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
//     }
//     return temp.sort((a,b) => a-b);
//     }



function getDifference(arr1, arr2) {
   var arr = [];
   arr1 = arr1.toString().split(',').map(Number);
   arr2 = arr2.toString().split(',').map(Number);
   // for array1
   for (var i in arr1) {
      if (arr2.indexOf(arr1[i]) === -1)
         arr.push(arr1[i]);
   }
   // for array2
   for (i in arr2) {
      if (arr1.indexOf(arr2[i]) === -1)
         arr.push(arr2[i]);
   }
   return arr.sort((x, y) => x - y);
}




// function getDifference(arr1, arr2) {
//    const finalarray = [];
//    arr1.forEach((e1) => arr2.forEach.arr1((e2)=> {
//       if (e1 === e2){


//          finalarray.push(e1)
//       }
//       }

//    ));


module.exports = { getDifference };