
function objectToArray(object) {

   let newArray = [];


   for (let key in object) {

         newArray.push([key, object[key]]);
  
  


   }

   console.log(newArray);

   return newArray;
}







module.exports = { objectToArray };