function pipe(functions){

  return functions.reduce((accumulator, currentFunction) => 
  currentFunction(accumulator), 0);
  
}
module.exports = {pipe};