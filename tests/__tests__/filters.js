const utils = require("../utils");
const expect = require("expect");
describe("/filters", () => {
  const server = utils.server();

  afterAll(function (done) {
    server.close();
    setTimeout(() => done(), 500);
  });

  const exec = (path = "/", method = "get") => {
    return server[method]("/api" + path);
  };

  it("GET / exists", async () => {
    const result = await exec("/filters");
    expect(result.status).toBe(200);
  });

  it("GET / returns filters", async () => {
    const result = await exec("/filters");
    expect(result.status).toBe(200);
    expect(result.body).toHaveProperty("data", "limit", "page", "total");
  });
});
