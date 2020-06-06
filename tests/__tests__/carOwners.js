const utils = require("../utils");
const expect = require("expect");

describe("/car-owners", () => {
  const server = utils.server();

  const filter = {
    countries: ["Brazil", "Ireland", "Egypt", "Peru"],
    colors: ["Green", "Violet", "Yellow", "Blue"],
    start_year: 2001,
    end_year: 2009,
    gender: "Male",
  };

  afterAll(function (done) {
    server.close();
    setTimeout(() => done(), 500);
  });

  const exec = (path = "/", method = "get", body = {}) => {
    return server[method]("/api" + path)
      .send(JSON.stringify(body))
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
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

  it("POST /filter exists", async () => {
    const result = await exec("/car-owners/filter", "post");
    expect(result.status).toBe(200);
  });

  it("POST /filter filters", async () => {
    const result = await exec("/car-owners/filter", "post", filter);
    console.log(result.body);
    expect(result.status).toBe(200);
  });
});
