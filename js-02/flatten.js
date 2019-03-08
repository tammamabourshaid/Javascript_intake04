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
    module.exports={flatten};
