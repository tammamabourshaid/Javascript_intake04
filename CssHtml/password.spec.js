const {
    password1,
    password2,

} = require("./password");

describe("password exercise", () => {
    it("Please enter Password", () => expect(password1).toBe(''));

    it("Please enter confirm password", () => expect(password2).toBe(''));

    it("\nPassword did not match: Please try again...", () => expect(passsword1).toBe(!password2));

    it("Error: Password must contain at least eight characters!", () => expect(password1).toBe(false));

    it("Error: password must contain at least one number (0-9)!", () =>
        expect(!ref.test(password1)).toBe(false));

    it("Error: password must contain at least one lowercase letter (a-z)!", () => 
        expect(!ref.test(password1)).toBe(false));

        it("Error: password must contain at least one uppercase letter (A-Z)!", () =>
            expect(!ref.test(password1)).toBe(false));

        it("Password Match: Welcome to RaslanDesigners!", () => 

            expect(password1).toBe(true));
        });
    
