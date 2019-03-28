class AsyncBasket {
    constructor() {
        this.products = [];
    }

    put(product) {
        return new Promise(resolve => setTimeout(() => resolve(this.products.push(product), 200)))
    }

    get() {
        return new Promise(resolve=>setTimeout(()=>resolve(this.products),200));
    }
}

module.exports={AsyncBasket}