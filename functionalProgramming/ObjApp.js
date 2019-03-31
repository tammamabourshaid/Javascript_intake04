const fs = require("fs"); // https://nodejs.org/api/fs.html

const {calculateBasket} = require("../js-02/calculateBasket");

fs.readFile("mall.json", (err, content) => {
    const {
        hover
    } = JSON.parse(content);
    console.log(hover);
    
    const {
        billa
    } = JSON.parse(content);
    console.log((billa));
console.log(Object.entries(billa.billa1.product3));


    const hover1 = calculateBasket((hover.hover1));
    const hover2 = calculateBasket((hover.hover2));
    const billa1 = calculateBasket((billa.billa1));
    const billa2 = calculateBasket((billa.billa2));
    const total=hover1+hover2+billa1+billa2
    console.log(total);
    
   
});