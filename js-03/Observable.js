class Observable{
    constructor(.0){
        this.array=[];
    }
    add(number){
        this.array.push(number);
    }
    subscribe(fn){
        const observed=this.array.map(e=>fn(e));
      this.array=[];
        return observed;
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}
module.exports={Observable};