class PersonAsker{
    constructor(readlinMock){
        this.readlinMock=readlinMock;
    
    }
    readlinMock(question){
    //     let answer = "";
    // if (question === "What is your name?") {
    //   answer = "Roger Federer";
    // } else if (question === "Where do you come from?") {
    //   answer = "Switzerland";
    // }
       return new Promise(resolve=>resolve(answer)); 
    
    }
   ask() {
       const question1=await readlinMock.question("what is your name?");
       const question2=await readlinMock.question("where are you from?");
       console.log(question1);
       console.log(question2);

       return question1+question2;
   };
}
   
// }


//  const getInfo=async function ( ) {
//     const ask= await ask();
//     const answer=await ask();
//     console.log(ask);  
//     console.log(answer);
// };

// getInfo();

module.exports={PersonAsker};