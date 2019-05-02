import * as fs from "fs";

class Task {
  constructor(
    private id: number,
    private name: string,
    private description: string,
    private finished: number
  ) {}

  describe() {
    return this.name;
  }
}

fs.readFile("./web-18/tasks.json", { encoding: "utf-8" }, (err, data) => {
  const tasks: Array<Task> = JSON.parse(data);
  tasks.forEach(task => console.log(task.describe()));
});
