const readlineMock = (question) => {
  return new Promise(
    resolve => resolve(question === "Who are you?" ? "Rafael Nadal" : "tennis player"));
};

module.exports = { readlineMock };