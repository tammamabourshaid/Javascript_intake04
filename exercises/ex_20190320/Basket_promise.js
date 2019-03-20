class Basket {
    constructor() {
        this.groceries = [];
    }

    put(product) {
        let groceries = this.groceries;
        return new Promise(resolve => {
            setTimeout(function () {
                groceries.push(product)
                resolve();
            }, 1000);
        });
    }

    get() {
        let groceries = this.groceries;
        return new Promise(resolve => resolve(groceries));
    }
}

const basket = new Basket();
basket.put("Tomatoes")
    .then(() => basket.put("Oranges"))
    .then(() => basket.get()
        .then(items => console.log(items)));
