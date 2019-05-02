window.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.getElementsByTagName("button"));
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      button.innerHTML = button.className;
    });
  });
});
