class PersonAsker{
    constructor(readlinMock){
        this.readlinMock=readlinMock;
        this.answer="";
    }

   
readlinMock(question){
    return question+=this.answer;
}
}
const answer=new Promise(resolve => resolve(answer));
 getInfo=async function ( ) {
    const ask= await answer();
    console.log(ask)  
}
getInfo();

module.exports={PersonAsker};