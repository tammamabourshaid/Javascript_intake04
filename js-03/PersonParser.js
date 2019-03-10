class PersonParser {

    constructor() {

    }

    parse(string) {

        return string
            .split("\n")
            .filter(e => /,/.test(e))
            .map(e => e.split(","))
            .map(element => {
                return {
                    firstname: element[0],
                    lastname: element[1],
                    gender: element[2]
                }
            });
    }
}

module.exports = { PersonParser };