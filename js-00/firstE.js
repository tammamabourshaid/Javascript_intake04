

const first = (callBack)=> {
      callBack (1); 
     } ;

const second = ()=>{
    return new Promise
     (resolve =>resolve (2));
};

const third = () => {
     return new Promise
      (resolve =>resolve (3));
};

  

const sum =  ()=>{

     let number1 = 0,
          number2 = 0,
          number3 = 0; 


     first((number)=>{
          number1 = number;
          second().then(async(number)=>{
               number2=number;
               number3 =await third();
             console.log(number1 + number2 + number3);
               
          })
     })
};
 
 sum();
    
