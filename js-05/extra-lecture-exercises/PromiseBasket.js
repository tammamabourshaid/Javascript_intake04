class PromiseBasket {
  constructor() {
    this.products = [];
  }

  put(product) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.products.push(product);
        resolve();
      }, 1000);
    });
  }

  get() {
    return this.products;
  }
}

const promiseBasket = new PromiseBasket();

promiseBasket.put('Wine')
  .then(() => promiseBasket.put('Bread'))
  .then(() => console.log(promiseBasket.get()));