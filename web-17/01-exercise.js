const rivers = [
    "Danube",
    "Inn",
    "Mur",
    "Raab",
    "Rhein",
    "Salzach",
    "Drau",
    "Enns"
];
const doc =  document.createElement ("ul");
document.body.appendChild(doc);
rivers.forEach(element => {
    const list = document.createElement ("li");
    list.innerHTML=element;
    doc.appendChild(list);

    
    
});
 


