window.addEventListener("DOMContentLoaded", function() {
  let h1 = document.createElement("h1");

  const count = document.body.childElementCount;

  let newItem = document.createTextNode(count);

  document.body.prepend(h1);

  h1.appendChild(newItem);
});
