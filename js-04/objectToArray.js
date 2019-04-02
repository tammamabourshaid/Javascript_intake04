// function objectToArray(object) {
//       const arrays = [];
//       Object.keys(object).forEach(key => {
//         const value = object[key];
//        console.log(value);

//         if (typeof value === "object") {
//           objectToArray(value).map(subArray => arrays.push([key, ...subArray]));
//         } else {
//           arrays.push([key, value]);
//         }
//       });
//       console.log(arrays);
//       return arrays;
//     }

function objectToArray(object){
      const arrays = [];
      Object.keys(object).forEach(key => {
            const element = object[key];
            if(typeof element === "object"){
                  objectToArray(element).map(subArray => 
                        arrays.push([key, ...subArray]));
            }else{
                  arrays.push([key, element]);
            }
      })
      return arrays;
}

module.exports = { objectToArray };