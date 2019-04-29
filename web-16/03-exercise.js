const images = Array.from(document.getElementsByTagName("img"));
document.body.removeChild(images[0]);
const drau = document.createElement("img");
drau.src = "Drau.jpg";
document.body.appendChild(drau);
