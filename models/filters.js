const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const filtersSchema = new mongoose.Schema(
  {
    start_year: Number,
    end_year: Number,
    gender: String,
    countries: Array,
    colors: Array,
  },
  {
    timestamps: true,
  }
);

const FiltersSchema = mongoose.model("Filters", filtersSchema);

module.exports = FiltersSchema;
