class Basket {
    constructor() {
        this.Product = Product;
        this.totalPrice = 0;

    }
    getTotal() {
        return this.totalPrice;
    }

    put(amount, Product) {
        return this.totalPrice += amount * Product.price;
    }
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
}
module.exports = { Basket, Product };