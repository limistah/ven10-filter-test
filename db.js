const mongoose = require("mongoose");

const csvtojsonV2 = require("csvtojson/v2");
const filters = require("./docs/filters.json");
const seedCarOwners = require("./libs/seedCarOwners");
const seedFilters = require("./libs/seedFilters");
module.exports = function (app) {
  mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      csvtojsonV2()
        .fromFile("./docs/car_owners.csv")
        .then((jsonObj) => seedCarOwners(jsonObj));
      seedFilters(filters);
    }
  );
};
