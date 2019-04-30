const unorderedList = document.createElement('ul');
const riverList = [
  "Danube",
  "Inn",
  "Mur",
  "Raab",
  "Rhein",
  "Salzach",
  "Drau",
  "Enns"
];

riverList.forEach(river => {
  const listItem = document.createElement('li');
  listItem.innerHTML = river;
  unorderedList.append(listItem);
  document.body.append(unorderedList)
});