const calculateBasket = function (array1,array2) {
    const basket =[{ product: "apple",amount: 4,price: 0.25},{ product: "peach",
     amount: 5,price: 0.24},{ product: "bread", amount: 2,price: 1.2}];

     basket.add({ product: "apple",amount: 4,price: 0.25},{ product: "peach",
     amount: 5,price: 0.24},{ product: "bread", amount: 2,price: 1.2});
    basket.getall();
}
module.exports={calculateBasket};