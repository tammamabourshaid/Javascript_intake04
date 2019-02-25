function getFrequencyTable(array){
    var counts = {};

for (var i = 0; i < array.length; i++) {
  var num = array[i];
 return counts[num] = counts[num] ? counts[num] + 1 : 1;
}
}
module.exports={getFrequencyTable};