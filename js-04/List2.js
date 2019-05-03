class List {
    constructor() { this.elements = []; }

    add(element, index) {
        let append;

        if (typeof element && typeof index === "number") {
            append = this.elements.splice(index, 0, element);
        } else {
            append = this.elements.push(element);
        }   
    }

    get(position) {
        const indexPosition = this.elements[position];

        return indexPosition;
    }

    count() {
        const length = this.elements.length;

        return length;
    }

    toArray() {
        const original = this.elements.slice();

        return original;
    }

}

module.exports = { List };