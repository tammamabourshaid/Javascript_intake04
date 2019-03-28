class BasketWithPromiseStore {
    constructor(store) {
        this.store = store;
        this.total = {
            gross: 0,
            net: 0
        }
    }

    put(product, amount, callback) {
        const firstLetterUpperCased = product.charAt(0).toUpperCase() + product.slice(1);
        this.store.getProductForName(firstLetterUpperCased).then((e) => {
            this.total.gross += e.grossPrice * amount;
            this.total.net += (e.grossPrice / ((e.vat + 1)) * amount);
            callback(e);
        })
    };


    getTotal() {
        return this.total

    };

}

module.exports = {
    BasketWithPromiseStore
}