window.addEventListener("DOMContentLoaded", function () {
    const headerTag = document.createElement("h1");
    document.body.appendChild(headerTag);
    headerTag.innerHTML = Array.from(document.body.children).filter(element => element.localName !== "script").length;
});