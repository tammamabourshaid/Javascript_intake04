function getProperty([objects]){
    var objectToInspect;     
    var result = [];
        
      for(objectToInspect = o; objectToInspect !== null; 
            objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
            result = result.concat(
                Object.getOwnPropertyNames(objectToInspect)
            );  
        }
        
        return result; 
    
}
    var objectToInspect;
    var result = [];
 
      for(objectToInspect = o; objectToInspect !== null;
            objectToInspect = Object.getPrototypeOf(objectToInspect)) {
            result = result.concat(
                Object.getOwnPropertyNames(objectToInspect)
            );
        }
 
        return result;
 
 }
