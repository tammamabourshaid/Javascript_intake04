const { ReadlineHistory } = require("./ReadlineHistory");

describe(`ReadlineHistory gets injected a readline function
that asks the user for input until the
command "quit" is entered.
In this unit test the readline function is mocked.
It returns the the a list of all
inputs via getHistory()`, () => {
  const generateReadlineFunction = inputs => callback =>
    setTimeout(() => callback(inputs.shift()), 100);

  it("should store one line", async () => {
    const rh = new ReadlineHistory(generateReadlineFunction(["Hello", "quit"]));
    await rh.start();
    expect(rh.getHistory()).toEqual(["Hello"]);
  });

  it("should store multiple commands", async () => {
    const rh = new ReadlineHistory(

      generateReadlineFunction([
        "list",
        "add",
        "Task 1",
        "add",
        "Task 2",
        "list",
        "quit"
      ])
    );
    await rh.start();
    expect(rh.getHistory()).toEqual([
      "list",
      "add",
      "Task 1",
      "add",
      "Task 2",
      "list"
    ]);
  });
});
