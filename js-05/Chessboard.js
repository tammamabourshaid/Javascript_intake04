let arr1 = ["R", "N", "B", "Q", "K", "B", "N", "R"];
let arr2 = ["p", "p", "p", "p", "p", "p", "p", "p"];
let arr3 = [" ", " ", " ", " ", " ", " ", " ", " "];
let arr4 = [" ", " ", " ", " ", " ", " ", " ", " "];
let arr5 = [" ", " ", " ", " ", " ", " ", " ", " "];
let arr6 = [" ", " ", " ", " ", " ", " ", " ", " "];
let arr7 = ["p", "p", "p", "p", "p", "p", "p", "p"];
let arr8 = ["R", "N", "B", "Q", "K", "B", "N", "R"];

let chessBoard = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8];

// console.log("-----------------")

chessBoard.forEach(function (element) {
    let empty = "";
    element.forEach(inarray => {
        empty += "|" + inarray;
    });
    empty += "|";
    console.log(empty);
    console.log("-----------------")
});

console.log("\n\nafter moving the Stone.......\n\n")

//move the 'N' stone.

arr1[1] = ' ';
arr3[2]='N'


chessBoard.forEach(function (element) {
    let empty = "";
    element.forEach(inarray => {
        empty += "|" + inarray;
    });
    empty += "|";
    console.log(empty);
    console.log("-----------------")
});