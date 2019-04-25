class ReadLineHistory {
    constructor(fn) {
        this.fn = fn;
        this.history = [];
    }

    start() {

        return new Promise(resolve => {
            const recursiveFunction = () => {
                fn(function (item) {
                    if (item !== "quit") {
                        this.history.push(item);
                        recursiveFunction();
                    } else {
                        resolve();
                    }
                });

            };
            recursiveFunction();

        });

    }
    getHistory() {
        return this.history;
    }
}

module.exports={ReadLineHistory};