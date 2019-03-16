/*function fromPairs(pair) {
    let a = pair[0];
    let b = pair[1];
    return {
        a: b  }
  }
*/
function fromPairs(list) {
    let obj = new Object;
    for (let pair of list) {
        const a = pair[0];
        const b = pair[1];
        obj[a] = b;
    }
    return obj;
}




module.exports = { fromPairs };
