let domElementsLength = document.getElementsByTagName('p').length;
let h1=document.createElement("h1");
h1.innerHTML(domElementsLength);
document.body.appendChild(h1);