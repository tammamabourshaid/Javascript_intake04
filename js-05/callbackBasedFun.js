const person={
    setName(name){
        this.name=name;
    },
    introduce:function(){
        console.log(`my name is ${this.name}`);
    }
}; //callback function for call andd apply
//function nameSetter(fn,context){
   // fn.call(context,"Tina");
   //fn.apply(context,["mum"]);
// }
// nameSetter(person.setName,person);
// person.introduce();

// callback-based function for bind
// function nameSetter(fn){
//     fn("Huber");
// }
// nameSetter(person.setName.bind(person));
// person.introduce();

//Wrapper like Promisw in former lesson
function nameSetter(fn){
    fn("Huber wrapper");
}
nameSetter(name=> person.setName(name));
person.introduce();