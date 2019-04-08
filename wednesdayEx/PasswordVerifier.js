class PasswordVerifier {
    constructor() {
        this.errorCount = 0;
    }
    verify(password) {
        this.isLargerThan8Chars(password);
        this.isNotNull(password);
        this.hasOneLowercaseLetter(password);
        this.hasOneUppercaseLettter(password);
        this.hasOneNumber(password);


        if (!this.hasOneLowercaseLetter(password)) {
            return " Password is not OK!";
        }

        if (this.isNotNull(password)) {
            return "Password is ok!"
        }

        if (this.errorCount == 0) {
            return "password is strong";
        }

        if (this.errorCount < 3) {
            return "password is OK";
        }
        return "Password is not strong!";
    }

    isLargerThan8Chars(string) {
        if (string.length > 8) {
            return true;
        }
        this.errorCount++;
        return false;
    }

    isNotNull(string) {
        if (string !== null) {
            return true;
        }
        this.errorCount++;
        return false;
    }

    hasOneUppercaseLettter(string) {
        let condition = /[A-Z]/;
        if (condition.test(string)) {
            return true;
        }
        this.errorCount++;
        return false;
    }

    hasOneLowercaseLetter(string) {
        let condition = /[a-z]/;
        if (condition.test(string)) {
            return true;
        }
        this.errorCount++;
        return false;
    }

    hasOneNumber(string) {
        let condition = /[1-9]/;
        if (condition.test(string)) {
            return true;
        }
        this.errorCount++
        return false;

    }

}
let userInput = new PasswordVerifier();
console.log(userInput.verify("11211!"));