//callback based

function callbackBased(callback) {
    setTimeout(function () {
        callback(1)
    }, 1000);
}

callbackBased(function (number) {
    console.log(number);
});


//promise based

const promise = new Promise(function (resolve) {
    resolve(2);
});

promise.then(function (number) {
    console.log(number);
});


//async/await based

const promisedNumber = function () {
    return new Promise(function(resolve){
        resolve(3);
    });
};

async function getNumberWithAsync() {
    const number = await promisedNumber();
    console.log(number);
}

getNumberWithAsync();