class PasswordVerifier {
    constructor() {
        this.conditions = [0, 0, 0, 0, 0];
        this.ergebnis = 0;
    }

    verify(vorschlag) {

        // 2. password should not be null
        if (vorschlag) {
            this.conditions[1] = 1;

            // 1. password should be larger than 8 chars
            if (vorschlag.length <= 8) {
                console.log('Yours is too short!')
            } else this.conditions[0] = 1;

            // 3. password should have one uppercase letter at least
            let grossbuchstabenbedingung = 0;
            for (let i = 0; i < vorschlag.length; i++) {
                if (vorschlag[i] == vorschlag[i].toUpperCase()) {
                    grossbuchstabenbedingung++
                }
            }
            if (grossbuchstabenbedingung == 0) {
                console.log("At least one upper case letter is required.")
            } else this.conditions[2] = 1;

            // 4. password should have one lowercase letter at least
            let kleinbuchstabenbedingung = 0;
            for (let i = 0; i < vorschlag.length; i++) {
                if (vorschlag[i] == vorschlag[i].toLowerCase()) {
                    kleinbuchstabenbedingung++
                }
            }
            if (kleinbuchstabenbedingung == 0) {
                console.log("At least one lower case letter is required.")
            } else this.conditions[3] = 5;

            // 5. password should have one number at least
            let ziffernbuchstabenbedingung = 0;
            for (let i = 0; i < vorschlag.length; i++) {
                if (isNaN(vorschlag[i]) == false) {
                    ziffernbuchstabenbedingung++;
                }
            }
            if (ziffernbuchstabenbedingung == 0) {
                console.log("At least one number is required.")
            } else this.conditions[4] = 1;
            this.ergebnis = this.conditions.reduce(function (a, b) {
                return a + b;
            }, 0);

        } else {
            console.log("Null!")
        };

        // Ergebnis
        if (this.ergebnis > 7) {
            console.log("That's acceptable.")
            return true;
        } else {
            console.log("Too many conditions are not fulfilled.");
            return false;
        }
    }
}

//const passwordVerifier = new PasswordVerifier;
//passwordVerifier.verify("Blablabla");

module.exports = {
    PasswordVerifier
}