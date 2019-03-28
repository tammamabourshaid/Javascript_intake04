class BasketWithCallbackStore {

    constructor(store) {
        this.store = store;
        this.gross = 0;
        this.net = 0;
    }

    put(product, amount) {

        let firstLetter = product.substr(0, 1).toUpperCase();
        let rest = product.substr(1);
        let capitalizedProduct = firstLetter.concat(rest);

        return new Promise(resolve => {

            this.store.getProduct(capitalizedProduct, function (item) {
                this.gross += item.grossPrice * amount;
                this.net += (item.grossPrice / (item.vat + 1)) * amount;
                resolve();
            });

        });
    }

    getTotal() {
        const total = {
            gross: this.gross,
            net: this.net
        }
        return total;
    }
}

module.exports = { BasketWithCallbackStore }