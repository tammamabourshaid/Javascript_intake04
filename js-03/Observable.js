class Observable {
    constructor() {
        this.observable = [];

    }
    add(number) {
        return this.observable.push(number);
    }
    subscribe(fn) {
        const result = this.observable.map(e => fn(e));
        this.observable = [];
        return result;
    }
}
