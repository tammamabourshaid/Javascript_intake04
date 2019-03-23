class AsyncAwaitBasket {
  constructor() {
    this.products = [];
  }

  put(product) {
    this.products.push(product);
  }

  get() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.products);
      }, 1000);
    });
  }
}

const asyncAwaitBasket = new AsyncAwaitBasket();

const putAndGetProducts = async () => {
  asyncAwaitBasket.put('Chicken breast');
  asyncAwaitBasket.put('Lemon');
  console.log(await asyncAwaitBasket.get());
};

putAndGetProducts();