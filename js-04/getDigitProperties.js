
function getDigitProperties(object) {
    
    let a = [];
    let n = Object.keys(object);
    let regexp = /[0-9]/;
    n.forEach(e => {
        if (regexp.test(e)) {
         a.push(e);
        }
        
    });

    return a;
}

                

module.exports = { getDigitProperties };