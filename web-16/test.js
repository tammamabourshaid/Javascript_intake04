const div = document.createElement("div");
const list = document.getElementsByTagName("ul")[0];

list.style.float = "left";
list.style.marginRight = "100px";
const drau = document.createElement("img");
drau.src = "Drau.jpg";

div.appendChild(list);
div.appendChild(drau);

document.body.appendChild(div);
