
// const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
//     if (typeof acc[curr] == 'undefined') {
//       acc[curr] = 1;
//     } else {
//       acc[curr] += 1;
//     }
//   console.log();

//     return console.log(acc);
//   }, {});


const data = [];
const object = {};

function getFrequencyTable(arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), object)
}

console.log(getFrequencyTable(data))


module.exports = { getFrequencyTable };  