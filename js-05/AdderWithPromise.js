class AdderWithPromise {
  constructor() { this.numbers = []; }

  add(number) {
    const add = this.numbers.push(number);

    return add; 
  }

  sum() {
    const reducer = ((digit1, digit2) => (digit1 + digit2)),
      sum = this.numbers.reduce(reducer, 0),
      promisedSum = new Promise(resolve => {
        resolve(sum);
      });

    return promisedSum;
  }
}

module.exports = { AdderWithPromise };