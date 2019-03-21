function transform(eini, anwendung){
    const fn = anwendung;
    let aussi = [];
    for (let i = 0; i < eini.length; i++){aussi.push(fn (  eini[i] ) )}
    return aussi;
  }

  module.exports = {transform}