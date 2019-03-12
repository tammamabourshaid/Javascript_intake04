// function NumberGuesser() {
//     alert('you have 5 guesses.Guess 1-5');
//     var answer = 5;
//     var guess = prompt("what you guess");
//     for (i = 0; i < 5; i++) {

//         if (answer == guess) {
//             alert("you geuss");
//             break;
//         } else {
//             guess = prompt("try again")

//             return guess;
//         }
//     }
// }
// module.exports = { NumberGuesser };

class NumberGuesser {
    constructor(number) {
      this.number = number;
      this.tries = 0;
    }
  
    guess(number) {
      this.tries++;
  
      if (number === this.number) {
        return "hit";
      } else if (number > this.number) {
        return "above";
      } else {
        return "below";
      }
    }
  
    getTries() {
      return this.tries;
    }
  }
  
  module.exports = { NumberGuesser };
