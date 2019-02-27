function flatten(eini) {
    return eini.reduce(function(result, current) {
      if (Array.isArray(current)) {
        return result.concat(flatten(current));
      }
      return result.concat(current);
    }, []);
  };
  
module.exports = { flatten };