function NumberGuesser() {
    alert('you have 5 guesses.Guess 1-5');
    var answer = 5;
    var guess = prompt("what you guess");
    for (i = 0; i < 5; i++) {
    
        if (answer == guess) {
            alert("you geuss");
            break;
        } else {
            guess = prompt("try again")

            return guess;
        }
    }
}
module.exports = { NumberGuesser };