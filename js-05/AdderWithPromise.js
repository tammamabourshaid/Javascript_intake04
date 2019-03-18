
// class AdderWithPromise {

//     constructor() {
//         this.numberSum = 0;
//     }

//     add(number) {
//         this.numberSum += number;
//     }

//     sum() {
//         //return new Promise(resolve => resolve(this.numberSum));
//         return this.numberSum;
//     }
    
// }
// module.exports = { AdderWithPromise }

//--------------------------------


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

//-----------------------------------


// const readline = require("readline");
// const number = readline.createInterface({

//   input: process.stdin,
//   output: process.stdout,

// });
// const ask = function (callback) {
//   return new Promise(resolve =>
//     number.question(callback, answer => resolve(answer)));

// };
// const returnString = async function () {
//   const addFirst = await ask("what is your first st?");
//   const addSecond = await ask("what is your second st?");
//   const addThierd = await ask("what is your thierd st?");
//   const addFourth = await ask("what is your fourth st?");
//   const addFifth = await ask("what is your fifth st?");
//   console.log(`firstSt= ${addFirst}\nsecondSt=${addSecond}\nthirdSt=${addThierd}\n fourth= ${addFourth}\nfifthNo=${addFifth}`);
//   const sum = (addFirst) + (addSecond) + (addThierd)+ (addFourth) + (addFifth);
//   console.log('String word= ' + sum);

//   number.close();
// };

// returnString();


function callbackBased(callback){
setTimeout(()=>callback(1),1000);
//setTimeout(()=>callback(hello),1000);
//setTimeout(()=>callback("hello","badi"),1000);

}
callbackBased(function(number){
  //callbackBased(function(number,word2){
  console.log(number);
  //console.log(word2);
  
});

const promise=new Promise(resolve=>resolve(1));

const asyncVersion=function(){
new Promise(resolve=>resolve)

}

console.log(promise);

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name\n", answer => {
    console.log(`Hello ${answer}\n Thanks, it was very nice to meet you.`);

});

const readlineMock = function(question) {
      let answer = "";
      if (question === "What is your name?") {
        answer = "Roger Federer";
      } else if (question === "Where do you come from?") {
        answer = "Switzerland";
      }

      return console.log(new Promise(resolve => resolve(answer)));
    };


    rl.close();

    readlineMock();
// ----------------------------------

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    expected  : 'resolved'
  }

  asyncCall();

// //-----------------------------
