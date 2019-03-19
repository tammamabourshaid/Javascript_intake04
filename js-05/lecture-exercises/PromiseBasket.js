class PromiseBasket {
  constructor() {
    this.products = [];
  }

  put(product) {
    return new Promise(resolve => resolve(this.products.push(product)));
  }

  get() {
    return new Promise(resolve => resolve(this.products));
  }
}

const promiseBasket = new PromiseBasket();
promiseBasket.put("Fish");
promiseBasket.put("Cola");
promiseBasket.get().then(value => console.log(value));