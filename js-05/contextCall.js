const person={
    setName:function(name){
        this.name=name;
    },
    introduce:function(){
        console.log(`my name is ${this.name}`);
    }

};
const setName=person.setName;
//setName.call(person,"Lisa");
//setName.apply(person,["Ricardo"])
const setNameOnPerson = setName.bind(person);
setNameOnPerson("ghazal")
person.introduce();