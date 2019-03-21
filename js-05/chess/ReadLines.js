const rl = require("readline");

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

const ask = question => {
  return new Promise(resolve => readline.question(question, answer => resolve(answer)));
};

const moveUnits = async () => {
  const replaceBlock = await ask("Which block would you like to change? (Choose 1 or 3)\n");
  const replaceBlockWith = await ask("With which block? (Hint: Replace with a string)\n");
  const replaceFirst = chessBoard.map(value => value.toString().replace(chessBoard[replaceBlock], replaceBlockWith));

  // const replaceOtherBlock = await ask("Replace the other on now\n");
  // const replaceOtherBlockWith = await ask("With which block?\n");
  // const replaceOtherSecond = chessBoard.map(value => value.toString().replace(chessBoard[replaceOtherBlock], replaceOtherBlockWith));
  console.log(replaceFirst);
  readline.close();
};

moveUnits();

/*
const rl = require("readline");

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

const ask = question => {
  return new Promise(resolve => readline.question(question, answer => resolve(answer)));
};

const moveUnits = async () => {
  const replaceBlock = await ask("Which block would you like to change? (Choose 1 or 3)\n");
  const replaceBlockWith = await ask("With which block? (Hint: Replace with a string)\n");
  let replacedFirst = chessBoard.map(value => value.toString().replace(chessBoard[replaceBlock], replaceBlockWith));

  console.log(replacedFirst);

  readline.close();
};

moveUnits();
*/