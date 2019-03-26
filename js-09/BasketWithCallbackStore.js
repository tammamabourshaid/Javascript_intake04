class BasketWithCallbackStore {
  constructor(store) {
    this.store = store;
    this.total = { gross: 0, net: 0 };
  }

  put(product, amount) {
    return new Promise(resolve => {
      const capitalizedFirstLetter = product.charAt(0).toUpperCase() + product.slice(1);

      this.store.getProductForName(capitalizedFirstLetter, item => {
        const gross = item.grossPrice, vat = item.vat;
        this.total.gross += gross * amount;
        this.total.net += (gross / (vat + 1)) * amount;
        resolve(item);
      });
    });
  }

  getTotal() {
    return this.total;
  }
}

module.exports = { BasketWithCallbackStore };