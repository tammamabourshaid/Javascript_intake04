class BasketWithPromiseStore {
  constructor(store) {
    this.store = store;
    this.total = { gross: 0, net: 0 };
  }

  put(product, amount, callback) {
    const capitalizedFirstLetter = product.charAt(0).toUpperCase() + product.slice(1),
      arrayOfProducts = this.store.getProductForName(capitalizedFirstLetter);

    arrayOfProducts.then(item => {
      const gross = item.grossPrice, vat = item.vat;
      this.total.gross += gross * amount;
      this.total.net += (gross / (vat + 1)) * amount;
      callback(item);
    });
  }

  getTotal() {
    return this.total;
  }
}

module.exports = { BasketWithPromiseStore };