const paragraph = document.getElementsByTagName('p');
const footer = document.getElementsByTagName('footer');
const heading = document.getElementsByTagName('h1');

window.replace = (text, anotherText) => {
  text = heading[0].innerHTML = anotherText;
  text = footer[0].innerHTML = anotherText;
  text = paragraph[0].innerHTML = anotherText;
};