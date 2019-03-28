class BasketWithPromiseStore {
    constructor(PromiseStore) {
        this.PromiseStore = PromiseStore;
        this.products = [];
        
    }




     
     put(product, amount, callback) {
       setTimeout(() => callback(product, amount), 100);
    }
}