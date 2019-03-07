class Observable {
  constructor() { this.array = []; }

  add(number) {
    return this.array.push(number);
  }

  subscribe(condition) {
    const applied = this.array.map(condition);
    this.array = [];
    return applied;
  }
  
}

module.exports = { Observable };