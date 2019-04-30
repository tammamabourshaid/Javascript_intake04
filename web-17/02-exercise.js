window.addEventListener("DOMContentLoaded", () => {

    const pTags = document.getElementsByTagName("p");
    const headerTag = document.createElement("h1");
    document.body.insertBefore(headerTag, pTags[0])
    headerTag.innerHTML = Array.from(document.body.children).filter(element => element.localName !== "script").length;
});



