const { AsyncBasket } = require("./AsyncBasket");

describe(`The AsyncBasketCreate has an asynchronous put method 
that stores a product inside of it.
Further more it has another asynchronous method called "get" that returns 
the products.
 `, () => {
  it("should put two products into the basket and retrieve them", done => {
    const basket = new AsyncBasket();
    const apple = { name: "apple", price: 0.23 };
    const water = { name: "water", price: 1.39 };
    basket.put(apple).then(() => {
      basket.put(water).then(() => {
        basket.get().then(products => {
          expect(products).toEqual([apple, water]);
          done();
        });
      });
    });
  });
});
