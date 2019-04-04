class NumberGuesser {

    constructor(fn) {
       this.fn = function() {
           return fn(number);
       }
    }


    guess() {
     
      const rr = this.fn;
      const number = parseInt(Math.random() * 100);
     
    }
    
}
