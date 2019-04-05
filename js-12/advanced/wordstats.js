const wordStats = {

    countWords: (text) => {
        return text.split(" ")
            .length
    },
    occurrences: (letter, text) => {
        const l = letter.toUpperCase()
        return text.split("")
            .filter(e => e === l).length

    },
    occurrencesList: (text) => {
 text=text.toLowerCase()

// const text1=[]
// text1.put(text)
//console.log(text)

 
         return text.split(" ").reduce((prev, curr) => {
           
            prev[curr] = prev[curr] ? prev[[curr]] + 1 : 1;
            
            return prev;
            
        }, {});
      }
      

//         });
//     }
 }


module.exports = {
    wordStats
}