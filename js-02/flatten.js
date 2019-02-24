function flatten(array){

    return [].concat.apply([], array);
}

    //OPTION 2
    //return array.reduce(function(arrayOne, arrayTwo){ return arrayOne.concat(arrayTwo);});

    //OPTION 3
    // let merged = [];
    
    // for (let index = 0; index < array.length; index++) {
    //     if(array[index].constructor === Array){
    //         merged = [].concat.apply([], array);
    //     }
    //     return merged;
    // }    
    

module.exports = {flatten};