class Basket {

    constructor() {
        this.total = 0;
        this.products = [];
    }

    getTotal() {
        return this.total;
    }

    put(amount, product) {
        let times = 0;

        while (times <= amount) {
            this.products.push(product);
            times++;
        }

        this.total = this.total + (amount * product.price);
        return this.products;
    }
}


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

module.exports = { Basket, Product };