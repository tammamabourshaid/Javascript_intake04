let filter = (array, filterFn = number => (number > 10 ? 1 : 0)) => {

    return array.filter(filterFn);
 }
module.exports={filter};
