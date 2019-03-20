class Basket {
    constructor() {
        this.groceries = [];
    }

    put(product, callback) {
        let groceries = this.groceries;
        setTimeout(function () {
            groceries.push(product);
            callback();
        }, 1000);
    }

    get(callback) {
        let groceries = this.groceries;
        setTimeout(() => callback(groceries), 500);
    }
}

const shopping = new Basket();
shopping.put("tomatos", function () {
    shopping.put("potatoes", function () {
        shopping.get(function (items) {
            console.log(items)
        })
    })
});

