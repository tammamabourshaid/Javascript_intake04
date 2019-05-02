const rivers = [
  "Danube",
  "Inn",
  "Mur",
  "Raab",
  "Rhein",
  "Salzach",
  "Drau",
  "Enns"
];
const ul = document.createElement("ul");

for (let i = 0; i < rivers.length; i++) {
  const river = rivers[i];
  const listItem = document.createElement("li");
  listItem.innerHTML = river;
  ul.appendChild(listItem);
}
document.body.appendChild(ul);

