class StringBuilder {
  constructor() {
    this.sentence = "";
  }
  append(text) {
    this.sentence += text;
  }
  toString() {
    return this.sentence;
  }
}

module.exports = {
  StringBuilder
};