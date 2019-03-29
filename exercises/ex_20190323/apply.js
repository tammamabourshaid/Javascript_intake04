class Person {
    constructor() {
        this.person = person;
    }
}

this.person = {
    setName: function (name) {
        this.product = name;
    },
    introduce: function () {
        console.log(`My name is ${this.name}`);
    }
};

function nameSetter(fn, context) {
    fn.apply(context, ["Hubert"]);
}

nameSetter(this.person.setName, this.person);
this.person.introduce();