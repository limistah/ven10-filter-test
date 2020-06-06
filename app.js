const express = require("express");
const createAPI = require("./api");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const db = require("./db");
require("dotenv").config();
app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", createAPI(app));

app.on("listening", function () {
  db(app);
});

module.exports = app;
