const readline = require("readline");

const adder = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const add = function (number) {
    return new Promise(resolve =>
        adder.number(number, answer => resolve(answer))
    );
};
add();
module.exports = { AdderWithPromise }