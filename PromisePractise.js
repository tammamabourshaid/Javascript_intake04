const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//this is the way to ...

const ask = function (question) {
    return new Promise(resolve =>
        r1.question(question, answer => (answer !== ""&& answer!==" ") ? resolve(answer) : ask(question))
    );
};
// promise recieves a resolve
//ask has a function inside



const talkToUser = async function(){

    const firstname = await ask("What is your firstname?");
    
    const lastname = await ask("What is your last name?");
    const country = await ask("Where are you form?");
    const job = await ask("What is your job?");
    const age = await ask("How old are you?");
    
    //this is how we ask the user for input.
    
    //now we print the result to the screen

    console.log(
        `Hello ${firstname} ${lastname} from ${country}. You are a ${job} and are ${age} years old.`

    
    );
    r1.close();
};
talkToUser();