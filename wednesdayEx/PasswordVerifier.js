class PasswordVerifier {
    constructor() {
        this.errorCount = 0;
    }
    verify(password) {
       
        
        if(!this.isNotNull(password)){
          
            return false;
        }

        if (!this.hasOneLowercaseLetter(password)) {
            return false;
        }

        if (this.errorCount == 0) {
            return true;
        }

        if (this.errorCount < 3) {
            return true;
        }
        return false;
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
console.log(userInput.verify("eebm"));