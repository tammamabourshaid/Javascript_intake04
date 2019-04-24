const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class taskmanagers {
    constructor() {
        this.tasks = [];
    }
    add() {}
    ask(q) {
        rl.question(q, answer => {
            if (answer === "add") {
                this.ask("What to add?");
                this.add(answer);
            }

            console.log(`the ${answer}`);
            //        rl.close();
            return answer;
        });
    }
    async init() {
        this.ask("Add or list tasks?");
    }
}
const task = new taskmanagers();
tasks.init();