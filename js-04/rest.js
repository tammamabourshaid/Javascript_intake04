function rest(array){
    let finalArray=[];
    array.forEach(element => {
     if(array.indexOf(element)>0){
         finalArray.push(element);
     }
     
    });
    return finalArray;
}
module.exports={rest};