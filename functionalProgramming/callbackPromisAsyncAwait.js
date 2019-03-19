const numberProvider = function (callback) {
  setTimeout(() => callback(1), 1000);
};

const numberProviderAsync = function () {
  return new Promise(resolve => resolve(1));
};

const addAsync = function () {
  numberProvider(async number => {
    const number1 = await number;
    const number2 = await numberProviderAsync();
    const number3 = await numberProviderAsync();
    console.log(number1 + number2 + number3);
  });
}
addAsync();

console.log("last line of code");


//Promise-----------------
// const numberProvider = function() {
//   return new Promise(resolve => resolve(1));
// };

// numberProvider().then(number => console.log(number));
//----------------------------

//promis&async------------------
// const numberProvider = function() {
//   return new Promise(resolve => resolve(1));
// };

// const numberProviderAsync = async function() {
//   console.log(await numberProvider());
// };

// numberProviderAsync();

// console.log("last line of code");
//------------------------------------
//promis&async------------------
// const numberProvider = function() {
//   return new Promise(resolve => resolve(1));
// };

// let number1 = 0,
//   number2 = 0,
//   number3 = 0;

// numberProvider()
//   .then(number => (number1 = number))
//   .then(number => (number2 = number))
//   .then(number => {
//     number3 = number;
//     console.log(number1 + number2 + number3);
//   });
//----------------------------



// const readline = require("readline");
// const number = readline.createInterface({

//   input: process.stdin,
//   output: process.stdout,

// });
// const ask = function (callback) {
//   return new Promise(resolve =>
//     number.question(callback, answer => resolve(answer)));

// };
// const addNumbersToSum = async function () {
//   const addFirst = await ask("what is your first number?");
//   const addSecond = await ask("what is your second number?");
//   const addThierd = await ask("what is your thierd number?");
//   console.log(`firstNo= ${addFirst}\nsecondNo=${addSecond}\nthirdNo=${addThierd} `);
//   const sum = parseFloat(addFirst) + parseFloat(addSecond) + parseFloat(addThierd);
//   console.log('total sum= ' + sum);

//   number.close();
// };

//addNumbersToSum();
//------------------------------
// const readline = require("readline");
// const rl = readline.createInterface({

//   input: process.stdin,
//   output: process.stdout

// });

// const ask = function (question) {
//   return new Promise(resolve =>
//     rl.question(question, answer => resolve(answer)));

// };
// const talkToPerson = async function () {

//   const firstname = await ask("What is your firstname?");
//   const lastname = await ask("What is your lastname?");
//   const country = await ask("Where are you from?");
//   const job = await ask("What is your job?");
//   const age = await ask("How old are you?");

//   console.log(
//     `Hello ${firstname} ${lastname} from ${country}. You are a ${job} and your old is ${age} years old.`
//   );
//   rl.close();
// };

// talkToPerson();







