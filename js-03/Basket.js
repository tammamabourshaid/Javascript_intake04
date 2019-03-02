class Basket {
  constructor() { this.total = 0; }

  put(times, product) {
    return this.total += (times * product.price);
  }

  getTotal() {
    return this.total;
  }
}

class Product {
  constructor(product, price) {
    this.product = product;
    this.price = price;
  }

}

module.exports = { Basket, Product };