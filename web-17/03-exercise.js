window.addEventListener("DOMContentLoaded", () => {
  const btns = Array.from(document.querySelectorAll("button"));
  console.log(btns);
  btns.forEach(button => {
    button.addEventListener("click", () => {
      button.innerHTML = button.className;
    });
  });
});
