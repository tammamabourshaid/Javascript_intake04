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

const unorderedListTag = document.createElement("ul");
document.body.appendChild(unorderedListTag);
rivers.forEach(element => {
  const listTag = document.createElement("li");
  unorderedListTag.appendChild(listTag);
  listTag.innerHTML = element;
});
