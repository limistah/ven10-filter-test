const express = require("express");
const createAPI = require("./api");
const app = express();
const csvtojsonV2 = require("csvtojson/v2");
const seedCarOwners = require("./libs/seedCarOwners");
const mongoose = require("mongoose");
app.use("/api", createAPI(app));

app.on("listening", function () {
  mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log("DB Connected");
      csvtojsonV2()
        .fromFile("./docs/car_owners.csv")
        .then((jsonObj) => seedCarOwners(jsonObj));
    }
  );
});

module.exports = app;
