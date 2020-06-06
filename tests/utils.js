const request = require("supertest");

const app = require("./../app");

module.exports = {
  server: () => {
    // db(app);
    // dataSeeder(app).then(() => {});
    return request(app);
  },
};
