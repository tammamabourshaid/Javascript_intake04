function getUnion(array1, array2){
    arrayIntersection = [];
    for (i = 0; i < array1.length; i++)
    {
        for (j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                arrayIntersection.push(array1[i]);
                delete array2[j];
                break;
            }
        }
    }
  sortedArrInt = arrayIntersection.sort((a, b) => a - b);
  return sortedArrInt;
}
module.exports = {getUnion};