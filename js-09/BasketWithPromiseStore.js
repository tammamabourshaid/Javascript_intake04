class BasketWithPromiseStore {
    constructor(store){
        this.store = store; 
        this.groceries = [];
        this.total = 0
    }
     put(item, amount){
         return new promise (resolve => resolve (this.groceries.push(item))};

    getTotal(){
    return this.total};
}
    {BasketWithPromiseStore};