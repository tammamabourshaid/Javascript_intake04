function getUnique(array) {
  return  Array.from(new Set(array)).sort(function(a,b){return a-b});
}
module.exports = { getUnique };


//found this way on google!
//i fixed the sorting by providing a function to sort from smaller to bigger!