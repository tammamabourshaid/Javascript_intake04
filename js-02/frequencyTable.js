
function getFrequencyTable(numbers){
let frequency = {};

numbers.forEach(number => {

   if(frequency[number]){
       frequency[number] += 1;
   }else {
       frequency[number] = 1;
   }
});
return frequency;
}



module.exports = {getFrequencyTable};