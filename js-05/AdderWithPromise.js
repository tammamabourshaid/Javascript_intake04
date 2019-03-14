class AdderWithPromise {
    constructor() {
        this.total = 0;
    }
    add(num) {
        this.total += num;
    }
    sum() {
        return new Promise(resolve => {
            resolve(this.total);
        });
    };

}



module.exports = {
    AdderWithPromise
};