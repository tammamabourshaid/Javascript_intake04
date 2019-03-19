const readlineMock = question => new Promise(resolve =>
  resolve(question === "Who are you?" ? "Rafael Nadal" : "tennis player"));

module.exports = { readlineMock };