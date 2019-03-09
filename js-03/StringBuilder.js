class StringBuilder {
    constructor() {
        this.sentence = "";
    }
    append (word) {
        this.sentence += word;
    }
    toString () {
        return this.sentence;
    }
}
module.exports = {
    StringBuilder
};