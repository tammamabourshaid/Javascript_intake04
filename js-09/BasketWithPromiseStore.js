class BasketWithPromiseStore {

    constructor(store) {
        this.store = store;
        this.gross = 0;
        this.net = 0;
    }

    put(product, amount, callback) {

        let firstLetter = product.substr(0, 1).toUpperCase();
        let rest = product.substr(1);
        let capitalizedProduct = firstLetter.concat(rest);


        this.store.getProduct(capitalizedProduct)
            .then(function (item) {
                this.gross += item.grossPrice * amount;
                this.net += (item.grossPrice / (item.vat + 1)) * amount;
                callback();
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

module.exports = { BasketWithPromiseStore }