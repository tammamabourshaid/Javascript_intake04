window.render = DOMReplica => {
  const tag = document.createElement(DOMReplica.tag);
  tag.className = DOMReplica.className;

  if (!DOMReplica.children) {
    const text = DOMReplica.text;
    tag.innerHTML = text;
  } else {
    const children = DOMReplica.children;
    children.forEach(child => {
      if (child.className) {
        const innerChildren = child.children;
        const childTag = document.createElement(child.tag);
        const className = child.className;
        childTag.className = className;
        tag.appendChild(childTag);

        innerChildren.forEach((innerChild) => {
          const innerChildTag = document.createElement(innerChild.tag);
          childTag.appendChild(innerChildTag);
          innerChildTag.className = innerChild.className;
          innerChildTag.innerHTML = innerChild.text;
        });
      } else {
        const childTag = document.createElement(child.tag);
        childTag.src = child.src;
        tag.appendChild(childTag);
      }
    });
  }
  document.body.appendChild(tag);
};

window.render({
  text: "This is an image",
  children: [
    {
      tag: "img",
      src: "Drau.jpg",
      alt: "Drau"
    }
  ]
})