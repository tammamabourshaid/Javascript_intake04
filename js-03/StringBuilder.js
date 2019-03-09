class StringBuilder {

    constructor() {
        this.string = "";
    }

    append(word) {
        this.string = this.string + word;

    }

    toString() {
        return this.string;
    }
}

module.exports = { StringBuilder };