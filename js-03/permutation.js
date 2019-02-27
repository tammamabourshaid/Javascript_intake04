function permutate(array) {
    let result = [];
    if (array.length === 1) {
        result.push(array);
        return result;

        for (let i =0; i<array.length;i++){
            let firstCharachter =array[i];
            let leftCharacters= array.substring(0,i)
        }
    }

}

module.exports = { permutate };



//     for (var i = 0; i < string.length; i++) {
//       var firstChar = string[i];
//       var charsLeft = string.substring(0, i) + string.substring(i + 1);
//       var innerPermutations = getAllPermutations(charsLeft);


//       for (var j = 0; j < innerPermutations.length; j++) {
//         results.push(firstChar + innerPermutations[j]);
//       }
//     }
//     return results;
//   }


//first I check if the arrays lenght is 1 then I just return that
//