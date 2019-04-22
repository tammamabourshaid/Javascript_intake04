describe(`readlineMock should simulate a user's
input from the command line`, () => {
    it("should allow to ask for name", async () => {
        const name = await readlineMock("Who are you?");
        expect(name).toBe("Rafael Nadal");
    });

    it("should allow to ask for the profession", async () => {
        const profession = await readlineMock("What is your profession?");
        expect(profession).toBe("tennis player");
    });

    it("should check against a promise", () => {
        expect(readlineMock().constructor).toBe(Promise);
    });
});

readlineMock = (eini) => {
    if (eini == "Who are you?") {
        let answer = "Rafael Nadal";
    }
    if (eini == "What is your profession?") {
        let answer = "tennis player";
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(answer);
        }, 0);
    });
}