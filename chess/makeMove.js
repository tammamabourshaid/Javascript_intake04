const { dictionary } = require("./dictionary");
const { Chessboard } = require("./Chessboard.js");
const readline = require("readline");

const chessboard = new Chessboard();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const answer = function (question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

const getAMove = async function () {
    let givenInput = [];
    const firstPosition = await answer("Enter your first position\n");
    const secondPosition = await answer("Enter your second position\n");
    rl.close();
    givenInput.push(firstPosition, secondPosition);
    console.log(givenInput);
    return givenInput;
}

    
const moveFigure = async function(){
    
    let move = await getAMove();
    
    const indexFirst = translateLetter(move[0]);
    const rowFirst = translateNumber(move[0]);

    const indexSecond = translateLetter(move[1]);
    const rowSecond = translateNumber(move[1]);

    const figure = chessboard.getBoard()[rowFirst][indexFirst];
    chessboard.getBoard()[rowFirst][indexFirst] = " ";
    chessboard.getBoard()[rowSecond][indexSecond] = figure;
    chessboard.print();
}


const translateLetter = function (string) {
    const elements = string.split("");
    const letter = elements[0];
    const translatedLetter = dictionary.column[letter];
    return translatedLetter;
}


const translateNumber = function (string) {
    const elements = string.split("");
    const number = elements[1];
    const translatedNumber = dictionary.row[number];
    return translatedNumber;
}


chessboard.print();
moveFigure();

/*
## User Story 2: Moving Figures

The user should be able to move a figure to a different position via the command line.

Use the official chess notation like `e4 e5`. This moves the current figure on position `e4` to position `e5`.

Don't forget the unit tests.
*/