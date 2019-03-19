const callBackNumber = function (callback) {
    setTimeout(function () {
        callback(1);
    }, 1000);
};


callBackNumber(function (number) { console.log(number) });


//==============================================================

const promise = new Promise(resolve => resolve(1));
promise.then(function (number) {
    console.log(number);
});

//==============================================================

const async = ()=>new Promise(resolve=>resolve(1));
const asyncFunction=async function(){console.log(await async());};
asyncFunction();

//==============================================================
 function  greet (greeting,callback) {
    setTimeout(function () {
        callback(`Hello${text}!`);
    }, 1000);
};

greet("Sam",any=> { console.log(any) });
//===============================================================
const promised = new Promise(resolve => resolve(greeting));
promise.then(greeting=>
    console.log(`Hello${text}!`));

//===============================================================
const firstNumberProvider=function(callback){
    callback(1);
};

const secondNumberProvider=function(){
    return new Promise(resolve=>resolve(2));
}

const thirdNumberProvider=function(){
    return new Promise(resolve=>resolve(3));
}

const add=function(){
    let number1=0,
     number2=0,
     number3=0;
firstNumberProvider(function (number){
    number1=number ;
    secondNumberProvider().then(async function(number){
        number2=number;
        number3=await thirdNumberProvider();
        console.log(number1+number2+number3);
    })
});
};
add();
//================================================================



































