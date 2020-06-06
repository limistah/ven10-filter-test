const request = require("supertest");

const app = require("./../app");
const db = require("./../db");

module.exports = {
  server: () => {
    db(app);
    return request(app);
  },
};
