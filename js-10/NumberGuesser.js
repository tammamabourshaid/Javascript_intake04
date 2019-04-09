class NumberGuesser{
    constructor(fn){
        this.fn=fn;

    }
    guess(){
        for(let number=0 ;number <= 99 ;number++){
            const result=this.fn(number);
            if(result==="equal"){

                return number;
            }
        }

    }

}
module.exports={NumberGuesser};