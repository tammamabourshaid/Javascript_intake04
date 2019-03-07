class Observable {
  constructor() {
    this.observed = [];
  }
  add(number) {
    this.observed.push(number);
  }
  subscribe(fn) {
    const mapped = this.observed.map(fn);
    this.observed = [];
    return mapped;
  }
}

module.exports = { Observable };