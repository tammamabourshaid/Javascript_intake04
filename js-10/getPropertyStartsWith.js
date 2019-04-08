function getProperty(object, prop) {
    let array = [];
    let keys = Object.keys(object);
    keys.forEach(key => {
        if (key.startsWith(prop)) {
            array.push(object[key]);
        }
    });
    if (array.length > 1) {
        return array;
    }
   return array.join();
    
}
module.exports = {
    getProperty
};