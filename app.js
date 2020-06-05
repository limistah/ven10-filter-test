const express = require("express");
const createAPI = require("./api");
const app = express();
const csvtojsonV2 = require("csvtojson/v2");
const seedCarOwners = require("./libs/seedCarOwners");
app.use("/api", createAPI(app));

app.on("listening", function () {
  csvtojsonV2()
    .fromFile("./docs/car_owners.csv")
    .then((jsonObj) => seedCarOwners(jsonObj));
});

module.exports = app;
