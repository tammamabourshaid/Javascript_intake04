class Basket {
    constructor() {
        this.total = 0;
    }
    
    put(qty, product) {
        this.total += qty * product.price;
    }

    getTotal() {
        return this.total;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// const apple = new Product();
// console.log(apple.price);



// const basket = new Basket();
//basket.put(2, apple);
//const orange = new Product("orange", 3)
//basket.put(3, orange);
// console.log(basket.getTotal());

module.exports = { Basket, Product };