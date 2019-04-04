const readline = require("readline");

class taskManager {
    constructor() {
        this.products = [];
    }
    putPromise(task) {
        return new Promise(resolve => resolve(task));
    }
    async putTask(task) {

        const theAsync = await this.putPromise(task);
        this.products.push(theAsync);
        console.log(theAsync);
    }

    listAllTasksPromise() {
        return new Promise(resolve => resolve(this.products));
    }
    async listAllTasks() {
        const getAsync = await this.listAllTasksPromise();
        if (getAsync.isEmpty()) {
            return "There are no tasks";
        }
        console.log(getAsync);
    }
}
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = function (question) {
    return new Promise(resolve =>
        r1.question(question, answer => (answer !== "" && answer !== " ") ? resolve(answer) : ask(question))
    );
};

const getTheTaskFromTheUser = async function () {

    const firstQuestion = await ask("Do you want to add a task or list exsiting tasks?");
    if (firstQuestion == "add a task") {
         return taskManager.putTask();
    } else if (firstQuestion == "list existing tasks") {
       return  taskManager.listAllTasks();
    }
    r1.close();
};
getTheTaskFromTheUser();