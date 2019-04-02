
// function getUnique(array) {

//    return array.filter((e, i, s) => s.indexOf(e) == i).sort((a, b) => a - b);
// }
// module.exports = { getUnique };


const _ = require("lodash");

function getUnique(array) {
   let un = _.uniq(array);
   let h = _.sortBy(un)
   return h;
}
module.exports = { getUnique };  