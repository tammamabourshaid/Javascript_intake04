function groupBy(array,fn){
    let object={};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(typeof element==="string"){
        const elementFunction=fn(element);
        object[elementFunction];
        }  
    }
return object;
}

module.exports={groupBy};