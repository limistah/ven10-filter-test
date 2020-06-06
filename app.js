const express = require("express");
const createAPI = require("./api");
const app = express();
const db = require("./db");
require("dotenv").config();
app.use("/api", createAPI(app));

app.on("listening", function () {
  db(app);
});

module.exports = app;
