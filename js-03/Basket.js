class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Basket {
  constructor() { this.items = [];}
  getItems() { return this.items; }
  showItems() { console.log(this.items); }
  calculatePrice() { console.log(this.items[0].name); }
  put(zahl, eini) { this.items.push([zahl, eini]); }
  getTotal() {
    let total = 0;
    this.items.forEach(function (element) { total = total + element[0] * element[1].price; });
    return total;
  }
}

module.exports = { Basket, Product };