function mapOnlyStings(functions){
    
    functions.reduce((accumlator,currentFunction)=>currentFunction(accumlator),0);
}
module.exports={mapOnlyStings};