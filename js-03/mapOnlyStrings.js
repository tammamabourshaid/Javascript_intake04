function mapOnlyStrings(array, fn) {
    let array2 = [];

    array.forEach(element => {

       let function1 = fn(element);

       if(typeof function1 === "string"){
        array2.push(function1);
       }else {
        array2.push(element);
       }

    });
    return array2;

}

module.exports = { mapOnlyStrings };