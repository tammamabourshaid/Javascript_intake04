 .
 const numberProviderCallback = (callback) =>
    setTimeout(() => callback(1), 500);

const numberProviderPromise = () => new Promise(resolve =>
    setTimeout(() => numberProviderCallback(resolve, 1000)));

const numberProviderAsync = async () =>
    await numberProviderPromise()

const combinerAsync = () => {
    numberProviderCallback(async number => {
        const number1 = await number,
              number2 = await numberProviderPromise(),
              number3 = await numberProviderAsync();
        console.log(number1 + number2 + number3);
    });
}
combinerAsync();
console.log("last combine of code");

module.exports={combinerAsync}
// const numberProviderCallback = function (callback) {
//     setTimeout(() => callback(2), 1000);
//   };

//   const numberProviderPromise = function () {
//     return new Promise(resolve => resolve(3));
//   };

//   const numberProviderAsync=async function(){
//     return await 5;
//   }

//   const sum = function () {
//     numberProviderCallback(async number => {
//       const number1 = await number;
//       const number2 = await numberProviderPromise();
//       const number3 = await numberProviderAsync();
//       console.log(number1 + number2 + number3);
//     });
//   }
//   sum();

//   console.log("last line of code");






// const add = (x, y) => {
//     console.log(x + y);
// }
// const addFive = (x, callback) => {
//     setTimeout(() => callback(x, 7), 1000)
// }
// addFive(1, add);

// const promise = () => new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(addFive(2, add), addFive(3, add), addFive(4, add)) 
//     }, 2000)
// })
// promise()

// const asyncFn = async () => await
//     setTimeout(() => new Promise(resolve => resolve((add(5, 7)))), 3000)

// asyncFn();

// const addNumber = number => new Promise(resolve => resolve(number));
// addNumber(13).then(v => console.log(v))