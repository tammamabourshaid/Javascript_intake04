class PersonAsker {
    constructor(readlineMock) {
        this.readlineMock = readlineMock;
        this.name = "";
        this.country = "";
    }
    ask() {
        const fullName = this.readlineMock("What is your name?");
        fullName.then(element => this.name += element);

        const country = this.readlineMock("Where do you come from?");
        country.then(element => this.country += element);
    }

    getInfo() {
        return this.name + " is from " + this.country;
    }
}


module.exports = { PersonAsker };