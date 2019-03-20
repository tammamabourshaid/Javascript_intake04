class Observable {
  constructor() {
    this.values = [];
  }

  add(value) {
    this.values.push(value);
  }

  subscribe(mapFn) {
    const mappedValues = this.values.map(mapFn);
    this.values = [];
    return mappedValues;
  }
}

module.exports = { Observable };
