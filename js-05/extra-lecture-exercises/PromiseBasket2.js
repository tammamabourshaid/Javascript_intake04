class PromiseBasket {
  constructor() {
    this.products = [];
  }

  put(product) {
    this.products.push(product)
  }

  get() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.products);
      }, 1000);
    });
  }
}

const promiseBasket = new PromiseBasket();

promiseBasket.put('Meat');
promiseBasket.put('Cheese');
promiseBasket.get().then(value => console.log(value));