
function getUnique(array) {
 
   return array.filter((e, i, s) => s.indexOf(e) == i).sort((a, b) => a - b);
}
module.exports = { getUnique };