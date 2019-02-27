function getUnique(array) {
  return  Array.from(new Set(array)).sort(function(a,b){return a-b});
}
module.exports = { getUnique };


//found this way on google!
//when using Set the elements are not repeated but the ordere is not relevant
//that is why we have to sort after that!
//i fixed the sorting by providing a function to sort from smaller to bigger!