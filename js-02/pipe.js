
    
        const pipe = functions => {
            const initialValue = 0,
              reducer = ((accumulator, currentFunction) =>
                (currentFunction(accumulator))),
              toPipe = functions.reduce(reducer, initialValue);
          
            return toPipe;
          };



module.exports={pipe};