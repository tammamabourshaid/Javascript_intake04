function StringBuilder() {

    this.sentence = "";
}
StringBuilder.prototype.append = function (word) {
    this.sentence += word;
}
StringBuilder.prototype.toString = function () {
    return this.sentence;
}

module.exports = {
    StringBuilder
};