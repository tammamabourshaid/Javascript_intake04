// class Basket {
//   constructor() {
//     this.obj = [];
//   }

//   //this is with promise only

  
//   //with promise
//   putPromise(product) {
//     return new Promise(resolve => resolve(product)).then(result => this.obj.push(result));
//   }

//   //with async 

// thePutPromise(){
//   return new Promise(resolve=>resolve(product));
// }

//   async put(product) {

//     const theAsync = await this.thePutPromise(product);
//     this.obj.push(theAsync);
//     console.log(theAsync);

//   }
// }


// //get Asynchronus
// getPromise() {
//   return new Promise(resolve => resolve(this.obj).then(console.log(this.obj)));
// }


// //with async await

// getPromiseOf(){
//   return new Promise(resolve=>resolve(this.obj));
// }
// async get() {
//   const getAsync = await this.getPromise();
//   console.log(getAsync);

// }



// //callbak
// const fs = require('fs');

// fs.writeFile("file.txt","hi there", ()=> {
//   fs.readFile("file.txt",(error,data)=> {
//     console.log(data);
//   });
// });

// //with promise
// writePromise(){
//   return new Promise(resolve=>resolve(fs.writeFile("file.txt","hi there")).then(fs.readFile("file.txt",(error,data)=>console.log(data))));
// }



// //async await

// thePromise (){
//   return new Promise(resolve(fs.writeFile("file.txt","hi there ")));
// }
// const readTheThing = await thePromise();
// fs.readFile(readTheThing);