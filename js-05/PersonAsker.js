class PersonAsker {
    constructor(readlineMock) {
        this.readlineMock = readlineMock;
        this.name = "";
        this.country = "";
    }

    ask() {
        const fullname = this.readlineMock("What is your name?");
        fullname.then(answer => this.name = answer);

        const country = this.readlineMock("where are you from?");
        country.then(answer => this.country = answer);
    }
    getInfo() {
        return this.name + " is from " + this.country;
    }


}
module.exports = {
    PersonAsker
};