class StringBuilder {

  constructor() { this.modified = ""; }

  append(text) {
    return this.modified += text;
  }

  toString() { return this.modified; }
}

module.exports = { StringBuilder };