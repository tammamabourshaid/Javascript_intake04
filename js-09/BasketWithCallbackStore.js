class BasketWithCallbackStore {

    constructor(CallbackStore) {
        this.readLineMock = CallbackStore;
        this.productName = "";
        this.grossPrice = "";
    }
};


ask()
{
    const product = this.readLineMock("What is Product product?");
    product.then(item => this.product += item);

    const grossPrice = this.readLineMock("What is grossPrice ?");
    grossPrice.then(price => this.grossPrice += price);

}

getInfo()
{
    return "gros:" + this.product , "net: "+this.grossPrice;

}


module.exports = {PromiseCallbackStore};