const listen = require("test-listen")
const axios = require("axios")
const server = require("../src/index")

describe("server tests", () => {
  it("should work", async () => {
    server.listen(8080)
    try {
      response = await axios.get(`http://localhost:8080`)
    } catch (err) {
      server.close()
      console.log(err)
      // fail
      throw err
    }
    expect(response).toBeTruthy()
    console.log(response)
    server.close()
  })
})
