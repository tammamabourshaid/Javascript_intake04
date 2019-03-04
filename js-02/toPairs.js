 function toPairs(list) {
const result= Object.entries(list).sort((a, b) => b[1] - a[1]);
console.log(result);

return result;
 }
//     return [key,value];
// }


module.exports = { toPairs };