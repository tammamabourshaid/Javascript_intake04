function mapOneArgumentCallbackToPromise(func) {

const results = (number) => {

    return new Promise (resolve => {
        func(number,resolve)
    });
    
}
return results;
}







module.exports = { mapOneArgumentCallbackToPromise }