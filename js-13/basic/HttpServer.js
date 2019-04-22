
describe(`create an http server, that returns the content of the file
products.json when called by the url http://localhost:3000.
HINT: https://expressjs.com/en/starter/hello-world.html`, () => {
  it("is a dummy test", () => expect(true).toBe(true));
});
*/


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))







