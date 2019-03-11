class StringBuilder {

    constructor() {
        this.sentence = "";
    }

    append(string) {
       return this.sentence +=string
    }

    toString() {

        return this.sentence
    }
}

//    const str= str.concat(string1,string2,string3)
// //str1=str1.concat(' ',str2);
// //str2=str2.concat(', ',str1);
//     console.log(str1.concat(' ', str2));
// // expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// // expected output: "World, Hello"
// return str;
// }
module.exports = { StringBuilder }