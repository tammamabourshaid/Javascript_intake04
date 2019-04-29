

console.log(document.getElementById("title"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("list"));


const title = document.getElementById("title");
console.log(title.innerHTML);
title.innerHTML = "Rivers of Austria";
title.style.color = "white";
title.style.backgroundColor = "royalblue";
