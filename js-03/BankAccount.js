class BankAccount {

  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    return this.balance += amount;
  }

  withdraw(amount) {
    return this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }

}

module.exports = { BankAccount };