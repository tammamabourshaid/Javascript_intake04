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

const basket = new Basket();
const apple = new Product("apple", 0.3);
const bread = new Product("bread", 2.5);
const water = new Product("water", 0.5);
basket.put(2, apple);
basket.put(3, bread);
basket.put(3, water);
console.log(basket.getTotal());
//console.log(basket.oaschloch);