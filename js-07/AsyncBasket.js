// Async Basket
// - Create a basket object that has an asynchronous put method that stores a product inside of it.
// - Create another asynchronous method called get that returns the products.
// - Put two products into the basket and print out these products by using the get method.
// - Provide a version for all 3 possibilities: callback, Promise, async/await


class Basket {
    constructor() {
        this.obj = [];
    }

    //this is with promise only
    putPromise(product) {
        return new Promise(resolve => resolve(product)).then(result => this.obj.push(result));
    }

    //this is the put method in async await but commented out becuase I used the promise before!
    //     async put(product) {
    
    //             const theAsync = await this.putPromise(product);
    //             this.obj.push(theAsync);
    //             console.log(theAsync);

    

    // }



    getPromise() {
        return new Promise(resolve => resolve(this.obj));
    }
    async get() {
        const getAsync = await this.getPromise();
        console.log(getAsync);

    }
}
const basket = new Basket();
basket.putPromise("Apple");
basket.putPromise("Orange")
basket.get();


//commments for myself
//// what ever is between () is called right away  so the function is between () and the () at the end calls it immediatly.
//callback is a function