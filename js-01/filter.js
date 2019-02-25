function filter(array, filterFn){

        const filteredArray = [];
        
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(filterFn(element) === true){
                filteredArray.push(element);    
            }
        }
        return filteredArray;

}

module.exports = {filter};