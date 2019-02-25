function getDifference(Array1,Array2){
    let difference=[]
    difference = Array1.filter(element => !Array2.includes(element));
}
module.exports={getDifference};