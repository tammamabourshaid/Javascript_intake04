class PropertyRemover{
    //let obj3 = JSON.parse(JSON.stringify(obj1));

    addPropertyToBeRemoved(name){
        //let copy=Object.assign({}, person)
        let copy=JSON.parse(JSON.stringify(obj1))
        console.log(copy);
        
        delete copy.name;

        return name;
       
    }
    process(text){
        return text.nested;

    }
}
module.exports={PropertyRemover};