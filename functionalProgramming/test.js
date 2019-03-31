const fs = require("fs"); // https://nodejs.org/api/fs.html

const {
  calculateBasket
} = require("../js-02/calculateBasket");
const {
  BankAccount
} = require("../js-03/BankAccount");

const basket = [{
    product: "apple",
    amount: 4,
    price: 0.25
  },
  {
    product: "peach",
    amount: 5,
    price: 0.24
  },
  {
    product: "bread",
    amount: 2,
    price: 1.2
  }
];

const ca = calculateBasket(basket)
//console.log(ca);

const bankAccount = new BankAccount();
bankAccount.deposit(100.53);
bankAccount.withdraw(10);
bankAccount.withdraw(7.95);
bankAccount.withdraw(8.45);
bankAccount.withdraw(4.13);

//console.log(bankAccount.balance);

fs.readFile("mall.json", (err, content) => {
  const {
    hover
  } = JSON.parse(content);
  console.log((hover));

  const ba = calculateBasket((hover.hover1));
console.log((ba));
});

