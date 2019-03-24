class Basket {
  constructor() {
    this.products = [];

  }

  async put(product,callback) {

   setTimeout(()=> {this.products.push(product);
    callback();
  },1000);
  }
  get(callback) {
    setTimeout(() => {callback(this.products)  
    }, 1000);


  }
  

  }
const basket=new Basket();
basket.put("strawberry",function(){
  basket.put("chocolate",function(){
    basket.get(function(products){
      console.log(products);
    
    });
  });
});

