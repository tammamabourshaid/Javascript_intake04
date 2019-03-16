 const useNumOne=()=> new Promise(resolve=> resolve(1));

  const getNumber = async function() {
    const takeNumber= await useNumOne();
    console.log(takeNumber)
  };
  getNumber();

  
  function callbackBased(callback){
      setTimeout(()=> callback(1),1000);
  };

      callbackBased(function(number){
          console.log(number);
      });

    
    