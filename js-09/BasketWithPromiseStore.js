class BasketWithPromiseStore {
    constructor(PromiseStore) {
        this.PromiseStore = PromiseStore;
        this.total = {
            net: 0.0,
            gross: 0.0
        };
    }

    async put(name, amount) {
        await this.PromiseStore.getProductForName(
            name,
            (function (item) {
                return function (product) {
                    const netPrice = product.grossPrice / (1 + product.vat);
                    that.total.net += netPrice * amount;
                    that.total.gross += product.grossPrice * amount;

                    (item)
                };
            }))
    }


    getTotal() {
        return this.total;
    }
}