
const fromPairs=(objectArray)=>{
results = [
    ["Luke May", 43, "male", "married"],
    ["Sarah Saw", 54, "female", "single"],
    ["Magac gose", 51, "male", "single"]
  ];
 const keys = ["name", "age", "gender", "status"];
  
 objectArray = []; // your result
  
  results.forEach(r => {
    let obj = {};
    r.forEach((r, i) => {
  obj[keys[i]] = r;
    });
    objectArray.push(obj);
  });
  return objectArray;
}
 // console.log(objectArray);

module.exports={fromPairs};