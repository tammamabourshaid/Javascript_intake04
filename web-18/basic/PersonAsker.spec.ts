import { PersonAsker } from "./PersonAsker";

describe(`PersonAsker should ask for the name and
country of a person by using the readline mock.`, () => {
  it("should ask for name and country", async () => {
    const readlineMock = function(question: string): Promise<string> {
      let answer = "";
      if (question === "What is your name?") {
        answer = "Roger Federer";
      } else if (question === "Where do you come from?") {
        answer = "Switzerland";
      }

      return new Promise(resolve => resolve(answer));
    };

    const personAsker = new PersonAsker(readlineMock);
    await personAsker.ask();

    expect(personAsker.getInfo()).toBe("Roger Federer is from Switzerland");
  });
});
