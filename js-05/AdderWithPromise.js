class AdderWithPromise {
    constructor() {
        this.number = 0;
    }

    add(number) {
        return this.number += number;
    }

    sum() {
        return new Promise(resolve => resolve(this.number));
    }
}

module.exports = { AdderWithPromise };