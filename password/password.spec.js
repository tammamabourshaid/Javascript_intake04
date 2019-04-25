const { passwordVerifier } = require("./password");
describe(`
Must verify a password with certain rulls.`, () => {
        it("should not be null.", () => {
            const password = null;
            expect(passwordVerifier(password)).toBe(false);
        });
        it("should have one uppercase letter at least.", () => {
            const password = "Marj1";
            expect(passwordVerifier(password)).toBe(true);
        });
        it("should have one lowercase letter at least.", () => {
            const password = "MARJh1";
            expect(passwordVerifier(password)).toBe(true);
        });
        it("should have one number at least.", () => {
            const password = "Marj1";
            expect(passwordVerifier(password)).toBe(true);
        });
    });
    