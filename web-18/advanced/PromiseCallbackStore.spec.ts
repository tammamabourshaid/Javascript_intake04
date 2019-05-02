import { BasketWithPromiseStore } from "./BasketWithPromiseStore";
import { Product } from "./Product";
import { BasketWithCallbackStore } from "./BasketWithCallbackStore.";
import { PromiseStore, CallbackStore } from "./stores";

describe(`
We have a list of products with name, grossPrice and vat properties.

There are two different stores that have access to the products and
they return the product object by passing them the product's name.
One store works with callback and the other with a Promise.

Implement two versions of the class Basket, one for each store 
type. The store will be passed into the Basket's constructor.

The Basket object with the callback-based storage should have a
method 'put' that returns a Promise and allows the caller
to add a new product. The put method awaits the product's name
along the amount as argument.
Note that the store only works on capitalised product names, i.e.
it only works with Apple instead of apple.

The Basket class that has the Promisee-based storage should
work the same. Only difference is that the put mehthod is
callback-based. So we pass the product name, the amount and a
callback.

The getTotal method of all two Basket classes should be 
synchronous. It should return an object containing two
properties: net and gross.

Net is the net price. Given a gross price of 11 with a
vat rate of 0.1, the net price is calculated by "11 / 1.1".
If the vat rate would be 0.2, it would be "11 / 1.2".

If the basket contains one product with gross price 11
and vat rate 0.1, the getTotal method should return
  {net: 10, gross: 11}
`, () => {
  const products: Array<Product> = [
    { name: "Bread", grossPrice: 1.21, vat: 0.1 },
    { name: "Keyboard", grossPrice: 18, vat: 0.2 },
    { name: "Apple", grossPrice: 0.11, vat: 0.1 },
    { name: "Water", grossPrice: 0.99, vat: 0.1 }
  ];

  const getProductForName = (productName: string): Product | undefined =>
    products.find(product => product.name === productName);

  it("should work with the BasketWithPromiseStore", done => {
    const basket = new BasketWithPromiseStore(
      new PromiseStore(getProductForName)
    );
    basket.put("bread", 3, () => {
      basket.put("keyboard", 2, () => {
        expect(basket.getTotal()).toEqual({ gross: 39.63, net: 33.3 });
        done();
      });
    });
  });

  it("should work with the BasketWithCallbackStore", async () => {
    const basket = new BasketWithCallbackStore(
      new CallbackStore(getProductForName)
    );
    await basket.put("apple", 2);
    await basket.put("water", 2);
    await basket.put("keyboard", 1);

    expect(basket.getTotal()).toEqual({ gross: 20.2, net: 17 });
  });
});
