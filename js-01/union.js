function getUnion(numbers1,numbers2) {
    
      
    const union = [];
    for (let i = 0; i < numbers1.length; i++) {
        const currentElement  = numbers1[i];
        for (let n = 0; n < numbers2.length; n++) {
            if (numbers2[n]===currentElement) {
                union.push(currentElement);
                break;
                
            }   
        } 
    }
   
      return union.sort();
    
}
module.exports = {getUnion};