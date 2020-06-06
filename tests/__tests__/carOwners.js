const utils = require("../utils");
const expect = require("expect");
describe("/car-owners", () => {
  const server = utils.server();

  afterAll(function (done) {
    server.close();
    setTimeout(() => done(), 500);
  });

  const exec = (path = "/", method = "get") => {
    return server[method]("/api" + path);
  };

  it("GET / exists", async () => {
    const result = await exec("/car-owners");
    expect(result.status).toBe(200);
  });

  it("GET / returns data", async () => {
    const result = await exec("/car-owners");
    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
    expect(result.body.data.length).toBeDefined();
    expect(result.body.data.length).toBeGreaterThan(0);
  });
});
