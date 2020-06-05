const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const carOwnersSchema = new mongoose.Schema(
  {
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    country: String,
    car_model: String,
    car_model_year: String,
    car_color: String,
    gender: String,
    job_title: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const CarOwnersSchema = mongoose.model("CarOwnersSchema", carOwnersSchema);

module.exports = CarOwnersSchema;
