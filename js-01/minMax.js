const  getMinMaxNumber=(array) => {

  const max = Math.max.apply(null, array) // 4

  const min = Math.min.apply(null, array) // 1
 return [min,max]
}
module.exports={getMinMaxNumber};