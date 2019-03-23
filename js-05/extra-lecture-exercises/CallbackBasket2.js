class CallbackBasket {
  constructor() {
    this.products = [];
  }

  put(product, callback) {
    this.products.push(product);
    callback();
  }

  get(callback) {
    setTimeout(() => {
      callback(this.products);
    }, 1000);
  }
}

const callbackBasket = new CallbackBasket();

callbackBasket.put('Bacon', () => {
  callbackBasket.put('Cheese', () => {
    callbackBasket.get((products) => {
      console.log(products);
    });
  });
});