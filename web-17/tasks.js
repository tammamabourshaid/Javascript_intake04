async function init() {
  const res = await fetch("http://localhost:3000/tasks", {
    method: "GET"
  });
  const tasks = await res.json();
  console.log(tasks);
  tasks.forEach(addTask);
}

function addTask(task) {
  console.log(task);
  const [list] = document.getElementsByClassName("list-group");
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.innerHTML = `${
    task.name
  }<span class="badge badge-secondary">${task.finished * 100}%</span>`;
  list.appendChild(listItem);
}
init();
