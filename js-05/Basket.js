class Basket{
    constructor(){
        this.basket=0;
        
    }
    
    putBasket(products) {
        this.basket+=products;
    }
   async getBasket(basket) {
     return new Promise(resolve =>
      ( resolve(basket))
    );

  };
     async displayProducts(){
    const shopping= await getBasket();
    putBasket(basket=>{
    const product1=basket;
    console.log(shopping,product1);
});
  };
}

  displayProducts();
