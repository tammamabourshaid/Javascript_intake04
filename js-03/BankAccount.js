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


const bankAccount = new BankAccount();
bankAccount.deposit(100.53);
bankAccount.withdraw(10);
bankAccount.withdraw(7.95);
bankAccount.withdraw(8.45);
bankAccount.withdraw(4.13);
console.log(bankAccount.balance);


module.exports = {
    BankAccount
};