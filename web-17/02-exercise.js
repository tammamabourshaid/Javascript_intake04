// Hacked Version
// const outerHeading = document.createElement('h1');
// outerHeading.innerHTML = 4;
// document.body.append(outerHeading)

// window.addEventListener('DOMContentLoaded', event => {
//   const innerHeading = document.createElement('h1');
//   innerHeading.innerHTML = 5;
//   document.body.append(innerHeading);
//   document.body.insertBefore(innerHeading, outerHeading);
// });

window.addEventListener("DOMContentLoaded", () => {
  const headingOne = document.createElement("h1");
  const firstParagraph = document.getElementsByTagName('p')[0];
  document.body.insertBefore(headingOne, firstParagraph);
  headingOne.innerHTML = Array
    .from(document.body.children)
    .filter(tag => tag.localName !== "script")
    .length;
});