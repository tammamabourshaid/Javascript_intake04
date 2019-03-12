// class Basket {
//     constructor() {
//         this.total = 0;
//     }

//     put(qty, product) {
//         this.total += qty * product.price;
//     }

//     getTotal() {
//         return this.total;
//     }
// }

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }



//module.exports = { Basket, Product };

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class Basket {
    constructor() {
      this.total = 0;
    }
  
    put(amount, product) {
      this.total += product.getPrice() * amount;
    }
  
    getTotal() {
      return this.total;
    }
  }
  
  module.exports = { Basket, Product };