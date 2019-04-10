const {
    checkPassword,
    isLargerThan8,
    isNumber,
    isLowerCase,
    isUpperCase,
    verification
} = require("./password");

describe("password exercise", () => {
    it("should give false if the passwords are empty", () => expect(checkPassword("", "")).toBe(false));

    it("should give true if larger than 8", () => expect(isLargerThan8("".length > 8)).toBe(false));

    it("should give true if contain number", () => expect(isNumber(/0-9/)).toBe(true));

    it("should give true if contain lowercase", () => expect(isLowerCase("/[a-z]/")).toBe(true));

   it("should give true if contain Upperercase", () =>expect(isUpperCase("/[A-Z]/")).toBe(true));
    
    it("should give false if not matches all", () => 
        expect(verification("","")).toBe(false));

    
});