class ReadlineHistory {
  constructor(fn) {
    this.fn = fn;
    this.history=[];
  }

    start() {
    return new Promise(resolve =>{
      const recursiveFn=() => {
       this.fn(function(item) {
          if(item !== "quit"){
            this.history.push(item);
            recursiveFn();
          }else{
            resolve();
          }
        });
      }
      recursiveFn();
    });
  }
  
  getHistory(){
    return this.history;
}
    }
    module.exports={ReadlineHistory};
  
  