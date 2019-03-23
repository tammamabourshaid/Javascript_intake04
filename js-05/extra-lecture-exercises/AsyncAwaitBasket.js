class AsyncAwaitBasket {
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

const asyncAwaitBasket = new AsyncAwaitBasket();

const putAndGetProducts = async () => {
  await asyncAwaitBasket.put('Chicken breast');
  await asyncAwaitBasket.put('Lemon');
  console.log(asyncAwaitBasket.get());
};

putAndGetProducts();