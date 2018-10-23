const micro = require("micro")
const handler = require("serve-handler")

const port = process.env.PORT || 3000

const server = micro(async (request, response) => {
  await handler(request, response, {
    public: "public"
  })
})

server.listen(port)
