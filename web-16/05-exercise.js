window.replace = function (string1, string2) {
    const reg = new RegExp(string1);

    const array = Array.from(document.body.children).filter(tag => tag.localName !== "script");
    array.forEach(element => {
        if (reg.test(element.innerHTML)) {
            element.innerHTML = string2;
        }
    });
}