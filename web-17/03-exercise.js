window.addEventListener("DOMContentLoaded", () => {
    const buttonTagsArray = Array.from(document.getElementsByTagName("button"));
    buttonTagsArray.forEach(tag => {
        tag.addEventListener("click", () => {
            tag.innerHTML = tag.className;
        });
    });
});

