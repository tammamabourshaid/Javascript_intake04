
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


  var str = ["|_A|,","◻B◼A","|_|_B|_|_|_|_|_|"];
var str2= ["A"]
for (var i = 0; i < 8; i++) {
  
  
}

str = str ;console.log(str);
  str2=str2;console.log(str2)