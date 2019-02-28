class Basket {
   constructor() {
       this.totalPrice = 0;

   }
   getTotal() {
       return this.totalPrice;
   }

   put(number, Product) {
       return this.totalPrice += number * Product.price;
   }
}
class Product {
   constructor(name, price) {
       this.name = name;
       this.price = price;

   }
}
module.exports = { Basket, Product };
