const _ = require("lodash")

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
    let textLower=text.toLowerCase();
    let textArray = textLower.split(" ")
    
     let result = [];
    for (let i = 0; i < 3; i++) {
        const reg = new RegExp(textArray[i], "g");
        const termObj = {term: textArray[i], count: textLower.match(reg).length}
        
    
        _.orderBy(termObj, (el) => el.term);
         result.push(termObj);
   
        
    }
return result;

},

}
module.exports={wordStats};
