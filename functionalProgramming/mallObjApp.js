const fs = require("fs"); // https://nodejs.org/api/fs.html

const {calculateBasket} = require("../js-02/calculateBasket");

fs.readFile("mall.json", (err, content) => {

    const mall = JSON.parse(content);
    console.log(mall.hover);
    console.log('------------------');

    // const {
    //     hover
    // } = JSON.parse(content);
    // console.log((hover));
    // const {
    //     billa
    // } = JSON.parse(content);
    // console.log((billa));

    mall.billa.billa1.Apple = { //add
        product: "Apple",
        amount: 5,
        price: 3
    }

    console.log(mall.billa);
    console.log('------------------');

    Object.entries(delete mall.billa.billa1.product3); //delete
    console.log(mall.billa);
    console.log('-----------------');

    console.log('total sales for hover1 and hover2 branches :');
    const hover1 = calculateBasket((mall.hover.hover1));
    const hover2 = calculateBasket((mall.hover.hover2));
    console.log('total sales for billa1 and billa2 branches :');
    const billa1 = calculateBasket((mall.billa.billa1));
    const billa2 = calculateBasket((mall.billa.billa2));
    const total = hover1 + hover2 + billa1 + billa2
    console.log(`Total sales for all mall branches :\n ${total}`);
    console.log(mall.billa.billa1.Apple)

    const calculateTotalForApple = () => {
        // const shopData = JSON.parse(content);

        const applePurchases = [];
        for (const shopName in mall) {
            const shopValue = mall[shopName]
            for (const basketName in shopValue) {
                const basketValue = shopValue[basketName];
                for (const productName in basketValue) {
                    const productValue = basketValue[productName];

                    if (productValue.product === "Apple") {
                        applePurchases.push(productValue);
                        console.log(productValue);
                    }
                }
               // console.log(basketName + basketValue);
            }console.log(`total sales for all Apple products : `);
            const total = calculateBasket(applePurchases)
            // const total = applePurchases
            //     .map(product => product.amount * product.price)
            //     .reduce((a, b) => a + b, 0);
            
        }
    }
    calculateTotalForApple();
});