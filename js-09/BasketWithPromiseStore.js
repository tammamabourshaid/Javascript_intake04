class BasketWithPromiseStore{

    constructor(promiseStore){
    this.promiseStore=promiseStore;
    this.total={
        gross:0.0,
        net:0.0,
    };
    }

    put(name,amount,callback){
        const productName=name.charAt(0).toUpperCase()+name.slice(1);
        this.promiseStore.getProductForName(productName,product=>{
        callback(product);
            const net= product.grossPrice/(1+produc.vat);
            this.total.net += net * amount;
            this.total.gross += product.grossPrice * amount;
            

        });
    }
   
    getTotal(){
        return this.total;

    }
    
     
}
module.exports={ BasketWithPromiseStore };