class Basket{
    constructor(){
        this.products=[];
    }
    put(product){
        return this.products.push(product);
        
    }
    get(callback) {
        setTimeout(() => {callback(this.products)  
        }, 1000);
      }
      
}
const basket=new Basket();
basket.put("iceCream");
basket.put("tiramisu");
basket.get(function(products){
    console.log(products);
});