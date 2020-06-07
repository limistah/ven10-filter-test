const mongoose = require("mongoose");

const csvtojsonV2 = require("csvtojson/v2");
const filters = require("./docs/filters.json");
const seedCarOwners = require("./libs/seedCarOwners");
const seedFilters = require("./libs/seedFilters");
const carOwnersFile =
  process.env.NODE_ENV === "test"
    ? "./docs/car_owners_test.csv"
    : "./docs/car_owners.csv";
module.exports = function (app) {
  mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    }
  );
};
