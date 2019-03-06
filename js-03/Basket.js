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



module.exports = { Basket, Product };