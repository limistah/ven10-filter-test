const utils = require("../utils");
const expect = require("expect");
describe("/", () => {
  const server = utils.server();

  afterAll(function (done) {
    server.close();
    setTimeout(() => done(), 500);
  });

  const exec = (path = "/") => {
    return server.get("/api" + path);
  };

  it("should be running", async () => {
    const result = await exec();
    expect(result.status).toBe(200);
    expect(result.body.online).toBeTruthy();
    expect(result.body.online).toBe(true);
  });

  it("should return 404 for unregistered routes", async () => {
    const result = await exec("/unknown");
    expect(result.status).toBe(404);
    expect(result.body.error).toBeTruthy();
    expect(result.body.error.msg).toBeTruthy();
    expect(result.body.error.msg).toBe("Not Found");
  });
});
