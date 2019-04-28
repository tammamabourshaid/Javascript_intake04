window.render = DOMReplica => {
  const tag = document.createElement(DOMReplica.tag);
  const children = DOMReplica.children;
  tag.className = DOMReplica.className;

  children.forEach(child => {
    if (child.className) {
      const innerChildren = child.children;
      const childTag = document.createElement(child.tag);
      const className = child.className;
      childTag.className = className;
      tag.appendChild(childTag)

      innerChildren.forEach((innerChild) => {
        const innerChildTag = document.createElement(innerChild.tag);
        childTag.appendChild(innerChildTag)
        innerChildTag.className = innerChild.className;
        innerChildTag.innerHTML = innerChild.text;
      });
    } else {
      const childTag = document.createElement(child.tag);
      childTag.src = child.src;

      tag.appendChild(childTag);
    }
  });
  document.body.appendChild(tag);
};