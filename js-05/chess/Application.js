
console.log("````\n------------\n|B||K| | | | | | |\n-----------------\n| | | |P| | | | |\n---------------\n```");

console.log("```\n--------------\n| B | | K | | | | |\n---------------\n| | | | P | | | |\n---------------\n```");

var size = 8,
    result = "";

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        result += (i + j) % 2 ? "◻B" : "◼A";
    }
    result += "\n";
}

console.log(result);

var results = [
    ["Luke May", 43, "male", "married"],
    ["Sarah Saw", 54, "female", "single"],
    ["Magac gose", 51, "male", "single"]
  ];
  var keys = ["name", "age", "gender", "status"];
  
  var objectArray = []; // your result
  
  results.forEach(r => {
    let obj = {};
    r.forEach((r, i) => {
  obj[keys[i]] = r;
    });
    objectArray.push(obj);
  });
  
  console.log(objectArray);
