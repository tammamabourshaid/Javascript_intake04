
class AdderWithPromise {

    constructor() {
        this.numberSum = 0;
    }

    add(number) {
        this.numberSum += number;
    }

    sum() {
        return new Promise(resolve => resolve(this.numberSum));
    }
    
}
module.exports = { AdderWithPromise }


// const readline = require("readline");
// const rl = readline.createInterface({

//     input: process.stdin,
//     output: process.stdout

// });
// const ask = function (question) {
//     return new Promise(resolve =>
//         rl.question(question, answer => resolve(answer)));

// };
// const addNumbersToSum = async function () {
//     const addFirst = await ask("what is your first number?");
//     const addSecond = await ask("what is your second number?");
//     const addThierd = await ask("what is your thierd number?");
//     console.log(`firstNo= ${addFirst}\nsecondNo=${addSecond}\nthirdNo=${addThierd} `);
//     const sum = parseFloat(addFirst) + parseFloat(addSecond) + parseFloat(addThierd);
//     console.log('total sum= ' + sum);

//     rl.close();
// };

// addNumbersToSum();

//module.exports = { AdderWithPromise }