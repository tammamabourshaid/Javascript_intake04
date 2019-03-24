class Basket{
    constructor(){
        this.products=[];
    }
    async put(product,callback) {

        setTimeout(()=> {this.products.push(product);
         callback();
       },1000);
       }
       get(){
           return this.products;
       }

}
const basket=new Basket;
basket.put("bluberry",function(){
    basket.put("cherry",function(){
       const fruit= basket.get();
            console.log(fruit);
        
    });

});