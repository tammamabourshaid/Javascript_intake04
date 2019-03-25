function flatten(cA, fA = [] ) {
    for (let i = 0; i < cA.length; i++) {
        const cE = cA[i];
        if (Array.isArray(cE)) {
            fA = flatten(cE, fA);
        }
        else{
            fA.push(cE);
        }
        
    }
    return fA;

    
}
module.exports = { flatten };
