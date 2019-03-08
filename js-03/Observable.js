class Observable {
    constructor() {
        this.observables = [];

    }
    add(number) {
        return this.observables.push(number);
    }
    subscribe(fn) {
        const result = this.observables.map(e => fn(e));
        this.observables = [];
        return result;
    }
}

module.exports = { Observable };