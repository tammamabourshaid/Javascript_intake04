class Basket {

    constructor() {
        this.groceries = []; 
    }

    put(item, callback) {
         let groceries = this.groceries;
            groceries.push(item);
         callback();
          }
      get(callback) {
          let groceries = this.groceries;
         callback(groceries);

    }
}

const shoppingList = new Basket();

shoppingList.put("Pineapple", function () {
    shoppingList.put("Passion Fruit", function () {
        shoppingList.get(function (items) {
            console.log(items)

        })
    })
});