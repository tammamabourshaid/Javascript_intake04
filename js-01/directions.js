/*function shortenDirections(directions){

    let directionsCompare = directions;
    let sortedDirections = ["empty"];

    for (let index1 = 0; index1 < directions.length; index1++) {
        const word1 = directions[index1];
        console.log("word1 " + word1);

        for (let index2 = 0; index2 < directionsCompare.length; index2++) {
            let word2 = directionsCompare[index2];
            console.log("word2 " + word2);

            if(isOpposite(word1, word2)){
                indexSpec =
                directionsCompare.splice()
                console.log("AFTER DELETION: " + directionsCompare);
                index2 = directionsCompare.length;

            }
            
        }

    }
    
    console.log("final sortdir " + sortedDirections);
    return sortedDirections;
     
}


function isOpposite(word1, word2){
    return (word1 === "NORTH" && word2 === "SOUTH" || 
    word1 === "SOUTH" && word2 === "NORTH" || 
    word1 === "EAST" && word2 === "WEST" || 
    word1 === "WEST" && word2 === "EAST")};

module.exports = {shortenDirections};

*/