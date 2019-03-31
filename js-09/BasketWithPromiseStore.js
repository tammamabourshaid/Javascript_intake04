class BasketWithPromiseStore {
    constructor(PromiseStore) {
        this.readLineMock = PromiseStore;
        this.vat = "";
    }
};


ask()
{
    const vat = this.readLineMock("What is VAT ?");
    vat.then(vat => this.vat += 0,1);
}





module.exports = {PromiseCallbackStore};