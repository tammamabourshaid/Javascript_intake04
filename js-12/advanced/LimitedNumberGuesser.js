class LimitedNumberGuesser{
    constructor(fn){
        this.fn=fn;

    }
    guess(){

        let guessedNum=0;
        let result=this.fn(guessedNum);
        let minNum=0;
        let maxNum=100;

        while(result !== "equal"){

              if(result==="below"){
            minNum = guessedNum;
            guessedNum += parseInt((maxNum-guessedNum)/2);

            }else{
            maxNum = guessedNum;
            guessedNum -= parseInt((guessedNum-minNum)/2);

            
        }
        result=this.fn(guessedNum);
    }
    
    return guessedNum;
}
    }


module.exports={LimitedNumberGuesser};