const readlineMock = function(question){
    return new Promise(resolve => {
        let answer;
        if(question === "Who are you?"){
            answer = "Rafael Nadal";
        }
        else{
            answer = "tennis player";
        }
        resolve(answer);
    });
}



let name, profession;
readlineMock("Who are you?")
.then(answer => (name = answer))
.then(() => readlineMock("What is your profession?"))
.then(answer => (profession = answer))
.then(() => name, profession);

module.exports = {readlineMock}