window.addEventListener("DOMContentLoaded", () => {
  const [input] = document.getElementsByTagName("input");
  const [span] = document.getElementsByTagName("span");
  let shares = 1;
  span.innerHTML = shares.toString();

  const [form] = document.getElementsByTagName("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    shares += parseInt(input.value, 10);
    span.innerHTML = shares.toString();
  });
});
