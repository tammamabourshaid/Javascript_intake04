const wordStats = {
  countWords: function(text) {

      let regexp=/\w+/g;
     return text.match(regexp).length;

  },
  occurrences: function(letter,text) {
      let result=new RegExp(letter.toUpperCase(), "g");
           
      let word= text.match(result).length;
      return word;


},
occurrencesList: function(text){
    let wordSplit=text.split(" ");
    let array=[...wordSplit];
    let list={term:"" ,count:0}
    console.log(list);
    
    array.forEach(e =>{
     if(e==="rose".ignoreUppercase||"is"||"a"){
         list.push([e]);
     }
    });
    
    
    

}
};
module.exports={wordStats};
