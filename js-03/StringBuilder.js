class StringBuilder {
    constructor(text = "") {
      this.text = text;
    }
    append(eini) {
      this.text = this.text + eini;
    }
    toString() {
      return this.text;
    }
  }
  
  module.exports = { StringBuilder };