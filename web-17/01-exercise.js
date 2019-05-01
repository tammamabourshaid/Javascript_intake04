const ul = document.createElement("ul");
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
for (let index = 0; index < rivers.length; index++){
    
const listRiver = document.createElement("li");
listRiver.innerHTML=rivers[index];

ul.appendChild(listRiver);
}
document.body.append(ul);
