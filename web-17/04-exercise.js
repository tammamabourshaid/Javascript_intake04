const [form] = document.getElementsByTagName("form");
const inputs = document.getElementsByTagName("input");
const [p] = document.getElementsByTagName("p");
form.addEventListener("submit", event => {
    p.innerHTML = (inputs[0].value + " " + inputs[1].value);
    event.preventDefault();
});
