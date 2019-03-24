class Basket{
    constructor(){
        this.products=[];
    }
  
 put(products) {
    return new Promise(resolve => {
      resolve(this.products.push(products));
    });
  }
  get(){
    return this.products;
};
       
}
const basket=new Basket;
const getProduct=async function(){
    await basket.put("pizza");
    await basket.put("wine");
    const food = basket.get();
        console.log(food);
    }

getProduct();
