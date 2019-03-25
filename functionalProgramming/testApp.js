class BasketAsync {

    constructor() {
        this.products = []
    }
     putInCall(products, callbackproducts) {
    setTimeout(() => {this.products.push(products);
        callbackproducts();} ,300);
}

  putInPromise (products) { new Promise(resolve =>resolve(
    putInCall( this.products.push (products))));
  }
// const putInAsync = async () =>
//     await putInPromise()

// const combinerAsync = async () => {
//     return new Promise(resolve => {
//         putInCall(async product => {
//             const product1 = await product,
//                 product2 = await putInPromise(),
//                 product3 = await putInPromise();
//             resolve(product1 + product2 + product3);
//             console.log(`callbackPromiseAsyncAwait:${product1+product2+product3}`);
           
           
            get(callbackproducts) {
                setTimeout(() => callbackproducts(this.products), 1000);
            }}
            const basket = new BasketAsync();
            basket.putInCall("apple", () => {
                basket.putInPromise("orange", () => {
                    basket.get((products) => {
                        console.log(products);
                    });
                });
            });
//         });
//     });
// }

//combinerAsync();
console.log("last combine of code");