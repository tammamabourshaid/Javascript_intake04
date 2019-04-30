window.addEventListener('DOMContentLoaded', () => {
  const [button1, button2, button3] = document.getElementsByTagName('button');
  const buttonsArray = Array.from([button1, button2, button3]);

  buttonsArray.forEach(button => {
    button.addEventListener('click', () => {
      button.innerHTML = button.className;
    });
  });
});