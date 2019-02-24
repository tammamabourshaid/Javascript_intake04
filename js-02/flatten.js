function flatten(array){
    //const flattened = array.flat(length-1);
    //let merged = [].concat.apply([], array);
    return array.reduce(function (flat, toFlatten) {
         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
       }, []);
    
    
    }
    module.exports={flatten};