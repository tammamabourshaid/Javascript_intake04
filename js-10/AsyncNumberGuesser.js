class AsyncNumberGuesser {

    constructor(fn) {
        this.fn = fn;
        this.min = 0;
        this.max = 100;
    }


    guess() {

        let guess = Math.floor(Math.random() * 100);
        return new Promise(resolve => {
            this.fn(guess).then(result => {
                if (result === "above") {
                    this.max = guess - 1;
                    guess = Math.floor(Math.random() * (this.max - this.min));
                    resolve(this.guess());
                }
                else if (result === "below") {
                    this.min = guess + 1;
                    guess = Math.floor(this.min + (Math.random() * (this.max - this.min)));
                    resolve(this.guess());
                }
                else {
                    resolve(guess);
                }
            });
        });
    }
}


// working solution with async/await

// async guess() {
//     let guess = Math.floor(Math.random() * 100);
//     let result = await this.fn(guess);

//     if (result === "above") {
//         this.max = guess - 1;
//         guess = Math.floor(Math.random() * (this.max - this.min));
//         return this.guess();
//     }
//     else if (result === "below") {
//         this.min = guess + 1;
//         guess = Math.floor(this.min + (Math.random() * (this.max - this.min)));
//         return this.guess();
//     }
//     else {
//         return guess;
//     }
// }

module.exports = { AsyncNumberGuesser }
