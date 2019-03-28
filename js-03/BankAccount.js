class BankAccount {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        return this.balance += amount;
    }

    withdraw(amount) {
        return this.balance -= amount;
    }
}

const myBanlAccount = new BankAccount()
myBanlAccount.de

module.exports = {
    BankAccount
};