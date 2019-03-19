class AdderWithPromise {
    constructor() {
        this.aussi = 0;
    }
    add(eini) {
        this.aussi = this.aussi + eini;
    }
    sum() {
      const ganzAussi = this.aussi;
      
      return new Promise(function(resolve) {
            (function() {
                resolve(ganzAussi);
            })();
        });
    }
}

module.exports = { AdderWithPromise };
