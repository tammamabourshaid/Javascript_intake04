let one = ["R", "n", "B", "Q", "K", "B", "n", "R"];
let two = ["P", "P", "P", "P", "P", "P", "P", "P"];
let three = [" ", " ", " ", " ", " ", " ", " ", " "];
let four = [" ", " ", " ", " ", " ", " ", " ", " "];
let five = [" ", " ", " ", " ", " ", " ", " ", " "];
let six = [" ", " ", " ", " ", " ", " ", " ", " "];
let seven = ["P", "P", "P", "P", "P", "P", "P", "P"];
let eight = ["R", "n", "B", "Q", "K", "B", "n", "R"];

let chessBoard = [one, two, three, four, five, six, seven, eight];






function movePiece(array, oldPosition, newPosition) {

    const split = oldPosition.split("");

    let letter = split[0];
    const number = split[1];

    let letterNew = newPosition.split("")[0];
    const numberNew = newPosition.split("")[1];

    

    const yAxis = getAxis(letter);
    const yAxisNew = getAxis(letterNew);


    const oldValue = array[array.length - parseInt(number)][yAxis];
    array[array.length - parseInt(number)][yAxis] = " ";
    array[array.length - parseInt(numberNew)][yAxisNew] = oldValue;

    //const oldValue = array[oldPosition[0]][oldPosition[1]];

    //array[oldPosition[0]][oldPosition[1]] = " ";
    //array[newPosition[0]][newPosition[1]] = oldValue;
    //console.log(array);
    // functiin jason 
    //
    return array;


};

function getAxis(letter) {
    switch (letter) {
        case "a":
            return 0;
            break;
        case "b":
            return 1;
            break;
        case "c":
            return 2;
            break;
        case "d":
            return 3;
            break;
        case "e":
            return 4;
            break;
        case "f":
            return 5;
            break;
        case "g":
            return 6;
            break;
        case "h":
            return 7;
            break;
        default:
            " unvalid move";
    }
}

movePiece(chessBoard, "a2", "a3");


console.log("-----------------");
chessBoard.forEach(element => {
    let empty = "";
    element.forEach(elementInside => {
        empty += "|" + elementInside;

    });
    empty += "|";
    console.log(empty);

    console.log("-----------------");
});
















// var blackKing={
//     player:'black',
//     pieceType:'king',
//     currentSquare:['E','1'],
//     
//     // etc...
// }

// 
// var pieces=[];
// pieces.push(blackKing);












//  Piece(name, color, value, row, col) {
//     2	this.name = name;
//     3	this.color = color;
//     4	this.value = value;
//     5	this.col = col;
//     6	this.row = row;





//class postion
//corindate X,Y

//color