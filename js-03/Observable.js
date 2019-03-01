class Observable {
    constructor() {
        this.array = [];
    }
    add(number) {
        this.array.push(number);
    }

    subscribe(fn) {
        let sub = this.array.map(num => fn(num));
        this.array = [];
        return sub;
    }

}

module.exports = { Observable };