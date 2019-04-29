const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

const tasks = JSON.parse(
  fs.readFileSync("./web-17/tasks.json", { encoding: "UTF-8" })
);
const saveTasks = tasks =>
  new Promise(resolve =>
    fs.writeFile(
      "./web-17/tasks.json",
      JSON.stringify(tasks),
      {
        encoding: "UTF-8"
      },
      resolve
    )
  );

app
  .use(cors())
  .use(express.json())
  .get("/tasks", (req, res) => res.send(tasks))
  .post("/tasks", (req, res) => {
    const task = req.body;
    task.id = tasks.length + 1;
    tasks.push(task);
    saveTasks(tasks).then(() => res.send(true));
  })
  .listen(3000, () => console.log("server started on port 3000"));
