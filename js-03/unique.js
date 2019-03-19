function getUnique(array) {
    return  Array.from(new Set(array))
    .sort(function(a,b){return a-b});
  }
  module.exports = { getUnique };