class Person {
    constructor() {
        this.person = person;
    }
}
this.person = {
    setName: function(name) {
        this.name = name;
    },
    introduce: function() {
        console.log(`My name is ${this.name}`);
    }
};

function nameSetter(fn) {
    fn("Hubert");
}

nameSetter(this.person.setName.bind(this.person));
this.person.introduce();
