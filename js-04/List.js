class List {
    constructor(inhalt = []) {
      this.inhalt = inhalt;
    }
    add(eini, i = this.inhalt.length) {
      this.inhalt.splice(i, 0, eini);
    }
    get(index){
        return this.inhalt[index];
    }
    count() {
      return this.inhalt.length;
    }
    toArray() {
      return this.inhalt;
    }
  }
  module.exports = { List };