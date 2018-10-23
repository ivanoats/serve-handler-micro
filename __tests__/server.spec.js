const listen = require("test-listen")
const request = require("supertest")
const server = require("../src/index")

describe("server tests", () => {
  it("should return a status of 200 (OK)", async () => {
    url = await listen(server)
    console.log(url)
    try {
      response = await request(url).get("/")
    } catch (err) {
      server.close()
      console.error(err)
      // fail
      throw err
    }
    expect(response.statusCode).toBe(200)
    server.close()
  })
})
