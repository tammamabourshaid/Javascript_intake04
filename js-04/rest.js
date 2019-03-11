// function rest(array){
//     let finalArray=[];
//     array.forEach(element => {
//      if(array.indexOf(element)>0){
//          finalArray.push(element);
//      }

//     });
//     return finalArray;
// }



function rest(array) {
     array.shift()
     return array;
}
module.exports = {
    rest
};


//first code is without slice of shift but the last one is with the built in tool!