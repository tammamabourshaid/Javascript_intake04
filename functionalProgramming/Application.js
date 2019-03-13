const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name\n", answer => {
    console.log(`Hello ${answer}\nThanks, it was very nice to meet you.`);
   
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
//----------------------------------
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     var result = await resolveAfter2Seconds();
//     console.log(result);
//     expected output: 'resolved'
//   }
  
//   asyncCall();
  
//-----------------------------