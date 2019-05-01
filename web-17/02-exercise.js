window.addEventListener("DOMContentLoaded", event => {
  const h = document.createElement("h1");
  document.body.appendChild(h);
  h.innerHTML = document.body.children.length - 1;
});
