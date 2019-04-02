

let one = ["R", "K", "B", "Q", "K", "B", "K", "R"];
let two = ["P", "P", "P", "P", "P", "P", "P", "P"];
let three = [" ", " ", " ", " ", " ", " ", " ", " "];
let four = [" ", " ", " ", " ", " ", " ", " ", " "];
let five = [" ", " ", " ", " ", " ", " ", " ", " "];
let six = [" ", " ", " ", " ", " ", " ", " ", " "];
let seven = ["P", "P", "P", "P", "P", "P", "P", "P"];
let eight = ["R", "K", "B", "Q", "K", "B", "K", "R"];

let chessBoard = [one, two, three, four, five, six, seven, eight];

chessBoard.forEach(element => {
  let empty = "";
  element.forEach(elementInside => {
    empty += "|" + elementInside;

  });
  empty += "|";
  console.log(empty);

  console.log("-----------------");
});