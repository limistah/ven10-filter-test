const express = require("express");
const createAPI = require("./api");
const app = express();

app.use("/api", createAPI(app));

module.exports = app;
