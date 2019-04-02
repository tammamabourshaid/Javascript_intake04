
class Observable {
    constructor() {
        this.value = [];
    }
    add(value) {
        this.value.push(value);

    }

    subscribe(mapFn) {
        const mappedValues = this.value.map(mapFn);
        this.value = [];
        return mappedValues;
    }
}




module.exports = { Observable };