const data = [];
const object = {};
function getFrequencyTable(arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), object)
}
console.log(getFrequencyTable(data))

module.exports = { getFrequencyTable };

// function getFrequencyTable(values) {
//   const frequencyTable = {};
//   for (let i = 0; i < values.length; i++) {
//     const value = values[i];
//     if (frequencyTable[value]) {
//       frequencyTable[value]++;
//     } else {
//       frequencyTable[value] = 1;
//     }
//   }

//   return frequencyTable;
// }