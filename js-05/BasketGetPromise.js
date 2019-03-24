class Basket {
    constructor() {
      this.products = [];
    }
    put(product){
        return this.products.push(product);     
    }
     
 get() {
    return new Promise(resolve => {
      resolve(this.products);
    });
  }

}
const basket=new Basket();
const getdessert=async function(){
    basket.put("cake");
    basket.put("smoothy");
    const dessert=await basket.get();
    console.log(dessert);
}
getdessert();