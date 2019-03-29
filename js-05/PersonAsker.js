class PersonAsker{
    constructor(readline){
        this.readline=readline;
        this.name="";
        this.country="";
    }
    async ask() {
        this.name = await this.readline("what is your name?");
        this.country = await this.readline("where are you from?");
    }
    getInfo(){
        return `${this.name}is from ${this.country}`;
    }
  
    
   }


module.exports={ PersonAsker };