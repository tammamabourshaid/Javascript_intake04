 const fs = require("fs"); // https://nodejs.org/api/fs.html

 const europe = {
     austria: {
         population: 8773000,
         capital: "Vienna",
         size: 83879
     },
     france: {
         population: 66991000,
         capital: "Paris",
         size: 643801
     },
     germany: {
         population: 82790000,
         capital: "Berlin",
         size: 357386
     },
     italy: {
         population: 60483973,
         capital: "Rome",
         size: 301338
     }
 };

 const mall = {
     hover: {
         hover1: {
             product1: {
                 product: 'Apple',
                 amount: 2,
                 price: 1.5,
                 code: 2541,

             },
             product2: {
                 product: 'Milch',
                 amount: 3,
                 price: 1.2,
                 code: 2542,
             }
         },
         hover2: {
             product1: {
                 product: 'Banana',
                 amount: 2,
                 price: 1.5,
                 code: 2543,
             },
             product2: {
                 product: 'bread',
                 amount: 3,
                 price: 1.2,
                 code: 2544,
             },
             product3: {
                 product: 'coffee',
                 amount: 4,
                 price: 3,
                 code: 2545,
             }
         }
     },
     billa: {
         billa1: {
             product1: {
                 product: 'tomato',
                 amount: 2,
                 price: 0.5,
                 code: 2546,
             },
             product2: {
                 product: 'salad',
                 amount: 3,
                 price: 0.9,
                 code: 2547,
             },
             product3: {
                 product: 'orange',
                 amount: 4,
                 price: 1.2,
                 code: 2548,
             }
         },
         billa2: {
             product1: {
                 product: 'juise',
                 amount: 2,
                 price: 1.5,
                 code: 2549,
             },
             product2: {
                 product: 'chokolate',
                 amount: 3,
                 price: 2.5,
                 code: 2540,
             },
         }

     }
 }

 function writeData(mall) {
     fs.writeFile("mall.json", JSON.stringify(mall), () =>
         fs.writeFile("europe.json", JSON.stringify(europe), () =>
             console.log("file europe has been written")
         )
     );
 }
 writeData(mall)

 fs.readFile("europe.txt", "utf8", (err, content) => {

     console.log(`file 3 has been writen : ${content}`);
 });
 return console.log("file mall has been written");