const name= "tammam"

const a= new Promise(resolve => resolve(name));
a.then(number => console.log(number));

    //
    // const resolvePromise = function(resolve) {
    // resolve(1);}
    //
    // const promise = new Promise(resolvePromise);

    // another way of writing it:
    // const promise = new Promise(function(resolve) {
    // resolve(1);
    // });
