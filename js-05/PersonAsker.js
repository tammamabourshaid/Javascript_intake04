class PersonAsker {

    constructor(readLineMock) {
        this.readLineMock = readLineMock;
        this.name = "";
        this.country = "";
    }

    ask() {
        const fullName = this.readLineMock("What is your name?");
        fullName.then(e => this.name += e);

        const country = this.readLineMock("Where do you come from?");
        country.then(e => this.country += e);
    }

    getInfo() {
        return this.name + " is from " + this.country;

    }
}

module.exports = { PersonAsker };
