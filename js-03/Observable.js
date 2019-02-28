class Observable{
    constructor(){
         this.subscribetion=0;
        
    }
    add(number){
        return this.subscribetion+=number;
    }
    subscribe(){
        return this.subscribetion * 2;
    }
}


 
module.exports={Observable};