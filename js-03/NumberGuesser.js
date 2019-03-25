class NumberGuesser {
    constructor(value){
        this.value= value;
        this.tries= 0;
    }
 guess(guessedNumber) {


    if (guessedNumber > this.value){
        this.tries += 1;
        return "above";
    }
    else if (guessedNumber < this.value){
        this.tries += 1;
        return "below";
    }
    else  {
        this.tries += 1;
        return "hit";
    }
}

getTries() {

    return this.tries;

}
}
module.exports = { NumberGuesser  };