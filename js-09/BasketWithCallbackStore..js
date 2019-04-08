class BasketWithCallbackStore {
  constructor(callbackStore) {
    this.callbackStore = callbackStore;
    this.total = {
      net: 0.0,
      gross: 0.0
    };
  }

  put(name, amount) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return new Promise(resolve => {
      this.callbackStore.getProductForName(
        name,
        (function (that) {
          return function (product) {
            const netPrice = product.grossPrice / (1 + product.vat);
            that.total.net += netPrice * amount;
            that.total.gross += product.grossPrice * amount;
            resolve();
          };
        })(this)
      );
    });
  }
  getTotal() {
    return this.total;
  }


}

module.exports = {
  BasketWithCallbackStore
};