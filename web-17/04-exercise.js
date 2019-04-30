window.addEventListener('DOMContentLoaded', () => {
  const [form] = document.getElementsByTagName('form');
  const [firstName, lastName] = document.getElementsByTagName('input');
  const [paragraph] = document.getElementsByTagName('p');

  form.addEventListener('submit', () => {
    paragraph.innerHTML = `${firstName.value} ${lastName.value}`;
  });
});