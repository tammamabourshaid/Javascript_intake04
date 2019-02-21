const { isPalindrome } = require("./palindrome");

describe("Palindrome", () => {
    it("should check if a word is Palindrome", () => expect(isPalindrome("maam")).toBe("isPalindrome"));
    it("should check if a word is Palindrome", () => expect(isPalindrome("baab")).toBe("isPalindrome"));
    it("should check if a word is not Palindrome", () => expect(isPalindrome("bakljbzam")).toBe("is not Palindrome"))
});