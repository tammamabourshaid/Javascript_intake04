function permutate(array) {
    let result = [];
    if (array.length === 1) {
        result.push(array);
        return result;
    }
    for (let i = 0; i < array.length; i++) {
        let firstCharachter = array[i];
        let leftCharacters = array.substring(0, i) + array.substring(i + 1);

        let innerPermutations = permutate(leftCharacters);
        for (let b = 0; b < innerPermutations.length; b++) {
            result.push(firstCharachter + innerPermutations[b]);
        }
    }
    return result;

}

module.exports = { permutate };

//google code!!

//first I check if the arrays lenght is 1 then I just return that
//only first test worked
// substring is not working!