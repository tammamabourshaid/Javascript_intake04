class AdderWithPromise {
  constructor() { this.numbers = []; }

  add(number) {
    const add = this.numbers.push(number);

    return add;
  }

  sum() {
    const sum = this.numbers.reduce((digit1, digit2) => digit1 + digit2, 0);

    return sum;
  }
}

module.exports = { AdderWithPromise };