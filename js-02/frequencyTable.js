const getFrequencyTable= array =>{
  return array.reduce((previous, current) => (previous[current] = ++previous[current] || 1, previous), {})
}
module.exports={getFrequencyTable};