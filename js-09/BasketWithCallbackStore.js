class BasketWithCallbackStore {
    constructor(store) {
        this.store = store;
        this.total = {
            gross: 0,
            net: 0
        }
    }

    put(product, amount) {
        return new Promise(resolve => {
                const firstLetterUpperCased = product.charAt(0).toUpperCase() + product.slice(1);
                this.store.getProductForName(firstLetterUpperCased, element => {
                    this.total.gross += element.grossPrice * amount;
                    this.total.net += (element.grossPrice / ((element.vat + 1)) * amount);
                    // console.log(this.total);
                    
                    resolve(element);
                });
        });
    }

    getTotal() {
        return this.total;
    }
}

module.exports = {
    BasketWithCallbackStore
}