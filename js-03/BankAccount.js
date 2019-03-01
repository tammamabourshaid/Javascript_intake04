class BankAccount {
    constructor() {
        this.amount = 0;
    }

    getBalance() {
        return this.amount;
    }

    deposit(sum) {
        return this.amount = this.amount + sum;
    }

    withdraw(sum) {
        return this.amount = this.amount - sum;
    }
}

module.exports = { BankAccount };