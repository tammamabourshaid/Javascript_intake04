class PersonAsker{
    constructor(readlineMock){
        this.readlineMock=readlineMock;
    
    }
    async readlineMock(question){
     return new Promise(resolve=>{
           resolve(question);
       })

    }
    async getInfo(){
        return new Promise(resolve=>{
            resolve(answer);
        })
    }
    async showInfo(){
        const ourAnswer=await getInfo(answer);
        console.log(ourAnswer);
    };
   async ask() {
       const question1=await this.readlineMock(question);
       const question2=await this.readlineMock(question);
       console.log(question1);
       console.log(question2);

    
   };

}
const readlineMock=new PersonAsker();
readlineMock.ask("where are you from?");
readlineMock.getInfo("Roger Federer is from Switzerland")



module.exports={PersonAsker};