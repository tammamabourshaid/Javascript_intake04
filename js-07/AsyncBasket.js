class AsyncBasket {
    constructor() {
      this.products = [];
    }
  
    put(product) {
      return new Promise(resolve => setTimeout(() => resolve(this.products.push(product)), 500));
    }
  
    get() {
      return new Promise(resolve => setTimeout(() => resolve(this.products), 500));
    }
  }
  
  module.exports = { AsyncBasket };