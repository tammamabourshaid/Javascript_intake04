function getMedian(input){
        let sorted = input.sort((a, b) => a - b);
        if (sorted.length % 2 === 0)
            {return (sorted[(sorted.length / 2)-1] + sorted[(sorted.length / 2)])/2}
        else{return sorted[(sorted.length - 1) / 2]}
        }

  module.exports = {getMedian};

