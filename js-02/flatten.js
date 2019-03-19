function flatten(array,flattenedArray=[]){

  for (let i=0;i<array.length;i++){
    const currentElement=array[i];
    if (Array.isArray(currentElement)){
      flattenedArray=flatten(currentElement,flattenedArray);
      }else{
        flattenedArray.push(currentElement);
      }
  }
    return flattenedArray;
    }

    //function flatten(array) {
    //return array.reduce((flat, toFlatten) => {
    //  return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    //}, []);
//}
    module.exports={flatten};
