class StringBuilder{
    constructor(){
        this.finalString="";
    }
    append(value){
        this.finalString+=value;
    }
    toString(){
        return this.finalString;
    }
}
module.exports={StringBuilder};