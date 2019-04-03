function getProperty(object,key){
//  
//    for(let property in object){
//    const nameModified =object[property].toLowercase();
//        if(nameModified===key.toloweCase());
//        return nameModified;
return object[Object.keys(object)
    .find(k => k.toLowerCase() === key.toLowerCase())
  ];
}
   

module.exports={getProperty};
