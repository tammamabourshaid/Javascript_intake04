class Observable {
    constructor() {
        this.inhalt = [];
    }
    add(eini) {
        this.inhalt.push(eini);
    }
    subscribe(funktion) {
        let aussi = this.inhalt.map(funktion);
        this.inhalt = [];
        return aussi
    }
  }
module.exports = {Observable};