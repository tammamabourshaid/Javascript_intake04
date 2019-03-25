let A = ["R", "k", "B", "Q", "K", "B", "k", "R"];
let B = ["P", "P", "P", "P", "P", "P", "P", "P"];
let C = [" ", " ", " ", " ", " ", " ", " ", " "];
let D = [" ", " ", " ", " ", " ", " ", " ", " "];
let E = [" ", " ", " ", " ", " ", " ", " ", " "];
let F = [" ", " ", " ", " ", " ", " ", " ", " "];
let G = ["P", "P", "P", "P", "P", "P", "P", "P"];
let H = ["R", "k", "B", "Q", "K", "B", "k", "R"];

let chessBoard = [A, B, C, D, E, F, G, H];

chessBoard.forEach(element => {
    let empty = "";
    element.forEach(elementInside => {
        empty += "|" + elementInside;

    });
    empty += "|";
    console.log(empty);

     console.log("-----------------");
});






function movePiece(array, oldPosition, newPosition) {

    
    // while (oldPosition < 0) {
    //     oldPosition += array.length;
    // }
    // while (newPosition < 0) {
    //     newPosition += array.length;
    // }
    // if (newPosition >= array.length) {
    //     var k = newPosition - array.length + 1;
        
    //     while (k--) {
    //         array.push(undefined);
    //     }
    // }

    //console.log(array, oldPosition, newPosition);

    const oldValue = array[oldPosition[0]][oldPosition[1]];

    array[oldPosition[0]][oldPosition[1]] = " ";
    array[newPosition[0]][newPosition[1]] = oldValue;
    console.log(array, oldPosition, newPosition); 
    //array.splice(newPosition, 0, array.splice(oldPosition, 1)[0]);
    return array; 
};



//I want to have a method that recievs an array and the position we want
//to move and the new position we want to move it to



// function movePiece(array,oldPosition,newPosition){
//     return array.replace(newPosition,oldPosition);
    
// }

movePiece(chessBoard,[0, 2], [2, 1]);