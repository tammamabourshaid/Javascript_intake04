const horizontal = ["---------------\n"],
  firstVerticalAndSymbols = ["|B| |K| | | | |\n"],
  secondVerticalAndSymbols = ["| | | |P| | | |\n"],
  allNewLines = /\n/g,
  test = [
    horizontal,
    firstVerticalAndSymbols,
    horizontal,
    secondVerticalAndSymbols,
    horizontal
  ],
  chessBoard = test
    .map(value => value.toString().replace(allNewLines, ""));

console.log(chessBoard);