 function getProperty(object, key) {
   
     return (object[key]===undefined? null: object[key]);
   
 }

 module.exports = {
     getProperty
 }