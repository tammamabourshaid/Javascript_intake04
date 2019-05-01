window.addEventListener("DOMContentLoaded", event => {
  const buttons = Array.from(document.getElementsByTagName("button"));

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      button.innerHTML = button.className;
    });
  });
});
