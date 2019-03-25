function getNumber1(number, callback) {
    setTimeout(function () {
        callback(number);
    }, 2000);
}







const number;
const question1 = new Promise(resolve => resolve(number));






async function getNumber3() {
    const promise;
    const myPromise = await promise;
}
getNumber3();










function prepend(string, callback) {
    callback(string + `hello${string}`);

}




function last(number, callback) {

}










let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('remove garbage');
    });
};

let removeGarbage = function (p) {
    return new Promise(function (resolve, reject) {
        resolve("removeGarbage");
    });
};
let winIceCream = function (p) {
    return new Promise(function (resolve, reject) {
        resolve("won Iceacream");
    });
};

cleanRoom().then(function (result) {
    return removeGarbage();
}).then(function () {
    return winIceCream();
}).then(function () {
    console.log("finished");

})









//A callback-based function 
//which calls back with "1" and also how to use it. *

function getNumber1(callback) {
    callback(1);
}
getNumber1(function (number) {
    console.log(number);
});





//A Promise-based function 
//which resolves to "1" and also how to use it. *

const promise = new Promise(resolve => resolve(1));

promise.then(function (number) {
    console.log(number);
});

//or!
promise.then(number => console.log(number));







//An async/await function 
//which resolves to "1" and also how to use it. *

const async = () => new Promise(resolve => resolve(1));

const resovlingOne = async function () {
    const number = await async ();
    console.log(number);
};
resovlingOne();








//A callback-based function with one string argument that calls back 
//with the concatenation of "Hello " and the passed string value. *



function greeting(text, callback) {
    callback(`Hello${text}`);
}

greeting("Mohamed", greet => {
    console.log(greet);
});







//A Promise-based function with one string argument that resolves
// with the concatenation of "Hello " and the passed string value. *



const promise = new Promise(resolve => resolve(text));

promise.then(text => console.log(`Hello ${text}`));









//Write one callback-based function that returns 1. Write one async function that returns 5..
// Write code that uses all two functions, adds the two numbers and prints out the result. *



function getNumber1(callback) {
    callback(1);
}
const promise = () => new Promise(resolve => resolve(5));

let promiseResult = await promise;

let result = getNumber1 + promiseResult;