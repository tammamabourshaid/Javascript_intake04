
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


