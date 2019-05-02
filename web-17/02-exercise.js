window.addEventListener("DOMContentLoaded", () => {
    const pTag = document.getElementsByTagName("p");
    const hTag = document.createElement("h1");
    document.body.insertBefore(hTag , pTag [0]);
    hTag.innerHTML = Array.from(document.body.children).filter(element => element.localName !== "script").length;

})


  


    
    
    

