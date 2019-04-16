class BasketWithCallbackStore {
  constructor(callbackStore) {
    this.callbackStore = callbackStore;
    this.total = {
      net: 0.0,
      gross: 0.0
    }; 
  }

  put(productName, amount) {
    const name = this.capitalise(productName);
    return new Promise(resolve => {
      this.callbackStore.getProductForName(name, product => {
        const net = product.grossPrice / (1 + product.vat);
        this.total.net += net * amount;
        this.total.gross += product.grossPrice * amount;
        resolve();
      });
    });
  }

  getTotal() {
    return this.total;
  }

  capitalise(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }
}

module.exports = { BasketWithCallbackStore };
