function getDigitProperties(object) {
    
    let digitProperties = [];
    let properties = Object.keys(object);
    let regexp = /[0-9]/;
    properties.forEach(e => {
        if (regexp.test(e)) { digitProperties.push(e);  }
        
    });

    return digitProperties;
}

                

module.exports = { getDigitProperties };