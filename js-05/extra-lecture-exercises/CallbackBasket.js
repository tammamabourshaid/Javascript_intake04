class CallbackBasket {
  constructor() {
    this.products = [];
  }

  put(product, callback) {
    setTimeout(() => {
      this.products.push(product);
      callback();
    }, 1000);
  }

  get() {
    return this.products;
  }
}

const callbackBasket = new CallbackBasket();

callbackBasket.put('Beer', () => {
  callbackBasket.put('Chips', () => {
    console.log(callbackBasket.get());
  });
});