class BasketWithCallbackStore {
    constructor(CallbackStore) {
        this.CallbackStore = CallbackStore;
        this.products = [];
        this.total = {
            gross: 0,
            net: 0
        };


    }

    // putPromise(product) {
    //     return new Promise(resolve => resolve(product));
    // }
    put(name, amount) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return new Promise(resolve =>
            this.CallbackStore.getProductForName(name, function (product) {
                const netPrice = product.grossPrice / (1 + product.vat);
                this.total.net += netPrice * amount;
                this.total.gross += product.grossPrice * amount;
                resolve();
             })()
            );
    });


    getTotal() {

        this.CallbackStore.getProductForName(product, element => {
            let gross = element[1];
            let net = element[1] / element[2];
        });

    }
}

// the functions he uses in the callback store to access the products array !!..

module.exports = {
    BasketWithCallbackStore
};