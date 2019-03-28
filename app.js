const products = [{
        name: "Bread",
        grossPrice: 1.21,
        vat: 0.1
    },
    {
        name: "Keyboard",
        grossPrice: 18,
        vat: 0.2
    },
    {
        name: "Apple",
        grossPrice: 0.11,
        vat: 0.1
    },
    {
        name: "Water",
        grossPrice: 0.99,
        vat: 0.1
    }
];

const getProductForName = productName =>
    products.find(product => product.name === productName);

class BasketWithPromiseStore {
    constructor() {
        this.gross = 0; this.vat = 0;
    }
    put(eini) {
        this.gross = this.gross + getProductForName(eini).grossPrice;
        this.vat = this.vat + getProductForName(eini).vat;
    }
    getTotal() {}
}

/*
class BasketWithCallbackStore {
    constructor(store) {
        this.gross = 0;
        this.net = 0;
    }
    put(eini) {

    }
    getTotal() {
        return {
            net: ,
            gross:
        }
    }
}


const basket = new BasketWithCallbackStore(new CallbackStore());
await basket.put("apple", 2);const products = [
    { name: "Bread", grossPrice: 1.21, vat: 0.1 },
    { name: "Keyboard", grossPrice: 18, vat: 0.2 },
    { name: "Apple", grossPrice: 0.11, vat: 0.1 },
    { name: "Water", grossPrice: 0.99, vat: 0.1 }
];
await basket.put("water", 2);
await basket.put("keyboard", 1);
*/
console.log(getProductForName("water").vat);