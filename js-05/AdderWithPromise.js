class AdderWithPromise {

    constructor() {
        this.total = 0;
    }

    add(number) {
        return this.total += number;
    }

    sum() {
        return new Promise(resolve => resolve(this.total));
    }
}

module.exports = { AdderWithPromise };