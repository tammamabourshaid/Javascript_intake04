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
        
       this.promiseStore.getProductForName(productName)
         .then (function(product){
            const net= product.grossPrice/(1+product.vat);
            this.total.gross += product.grossPrice * amount;
            this.total.net += net * amount;
            callback();
        
        });  
    }
   
    getTotal(){
        return this.total;
    }
   
     
}
module.exports={ BasketWithPromiseStore };