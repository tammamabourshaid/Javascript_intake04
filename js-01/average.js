function getAverage(array){
var sum=0;
var count=array.length;

for(var i=0;i<count;i++)
   sum=sum+array[i];
return sum/count;
}
module.exports={getAverage};