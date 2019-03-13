const getPromisedResult = function(answer) {
    return new Promise(resolve =>
      ( resolve(answer))
    );
  };
module.exports={getPromisedResult}; 