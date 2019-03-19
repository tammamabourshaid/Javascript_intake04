class CallbackBasket {
  constructor() {
    this.products = [];
  }

  put(product, callback) {
    setTimeout(() => {
      this.products.push(product);
      callback;
    }, 500);
  }

  get() {
    setTimeout(() => {
      return console.log(this.products);
    }, 1000);
  }
}

const callbackBasket = new CallbackBasket();
callbackBasket.put("Beer");
callbackBasket.put("Wine", callbackBasket.get());
