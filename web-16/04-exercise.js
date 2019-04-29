const makeElement = function (object, parent) {

    const child = document.createElement(object.tag);
    parent.appendChild(child);

    if (object.className) {
        child.className = object.className;
    }
    if (object.text) {
        child.innerHTML = object.text;
    }
    if (object.src) {
        child.src = object.src;
    }
    if (object.children && object.children.length > 0) {
        object.children.forEach(grandchild => {
            makeElement(grandchild, child);
        });
    }
}

window.render = function (object) {
    makeElement(object, document.body);
}
