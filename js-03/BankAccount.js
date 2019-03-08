class BankAccount {
    constructor(balance = 0) { this.balance = balance; }
    getBalance() { return this.balance; }
    deposit(amount) { this.balance = this.balance + amount; }
    withdraw(amount) { this.balance = this.balance - amount; }
}


module.exports = { BankAccount };