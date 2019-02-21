
//function filter(array){
   // let bigger=[];
   // var count=array.length;
    
   // for(var i=0;i<count;i++)
      
//if (array[i]>10)bigger.push(array[i])

  //  return bigger;
//}

let filter=(array,filterFn=number=>(number>10?1:0))=>{

    return array.filter(filterFn);
}

     module.exports={filter};