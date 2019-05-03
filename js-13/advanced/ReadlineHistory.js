class ReadlineHistory {
  constructor(fn) {
    this.fn = fn;
    this.history = [];
  }

  start() {
    return new Promise(resolve => {
      const recursiveFn = () => {
        this.fn(elements => {
          if (elements !== 'quit') {
            this.history.push(elements);
            recursiveFn();
          } else {
            resolve();
          }
        });
      }
      recursiveFn();
    });
  }

  getHistory() {
    return this.history;
  }
}

module.exports = { ReadlineHistory };