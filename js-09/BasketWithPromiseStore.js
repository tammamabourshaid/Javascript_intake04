class BasketWithPromiseStore{

    constructor(promiseStore){
    this.promiseStore=promiseStore;
    this.total={
        gross:0.0,
        net:0.0,
    };
    }

    put(productName,amount,fn){
        const name = this.capitalise(productName)
        this.promiseStore.getProductForName(name,productName)
        const net=product.grossPrice/(1+product.vat);
        this.total.net += net * amount;
        this.total.gross += product.grossPrice * amount;
       fn(product);
    }
   
    getTotal(){
        return this.total;

    }
    capitalise(word){
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    }    
}
module.exports={ BasketWithPromiseStore };