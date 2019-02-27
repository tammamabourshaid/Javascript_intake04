class BankAccount {
    constructor() {
        this.deposit1 = 0;
        this.withdraw1 = 0;

    }
    deposit(number) {
        return this.deposit1 += number;
    }

    withdraw(number) {
        return this.withdraw1 += number;
    }

    getBalance() {
        return this.deposit1 - this.withdraw1;
    }
}
module.exports = { BankAccount };