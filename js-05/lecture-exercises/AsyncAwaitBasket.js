class AsyncAwaitBasket {
  constructor() {
    this.products = [];
  }

  async put(product) {
    return await this.products.push(product);
  }

  async get() {
    return await console.log(this.products);
  }
}

const asyncAwaitBasket = new AsyncAwaitBasket();
asyncAwaitBasket.put("Milk");
asyncAwaitBasket.put("Lemons");
asyncAwaitBasket.get();