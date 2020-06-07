const CarOwners = require("../models/carOwners");

async function fetchCarOwners(req, res, next) {
  let { limit, page } = req.query;

  limit = parseInt(limit || 10);
  page = parseInt(page || 0);

  const skip = limit * page;

  const filters = await CarOwners.find({}).limit(limit).skip(skip);
  const total = await CarOwners.find({}).countDocuments();

  return res.status(200).json({
    data: filters,
    total: total,
    limit: limit,
    page: page + 1,
  });
}

async function filterCarOwners(req, res, next) {
  const { start_year, end_year, gender, countries, colors } = req.body || {};

  const query = {};
  if (start_year) {
    query.car_model_year = { $gte: start_year };
  }
  if (end_year) {
    query.car_model_year = {
      ...(query.car_model_year || {}),
      $lte: end_year,
    };
  }
  if (gender) {
    const genderFirstCapital = gender[0].toUpperCase();
    let genderRest = gender.split("");
    genderRest.splice(0, 1, "");
    genderRest = genderRest.join("").trim();
    query.gender = genderFirstCapital + genderRest;
  }
  if (countries) {
    query.country = { $in: countries };
  }
  if (colors) {
    query.car_color = { $in: colors };
  }

  let { limit, page } = req.query;

  limit = parseInt(limit || 10);
  page = parseInt(page || 0);

  const skip = limit * page;

  const carOwners = await CarOwners.find(query).limit(limit).skip(skip);
  const total = await CarOwners.find(query).countDocuments();

  return res.status(200).json({
    data: carOwners,
    total: total,
    limit: limit,
    page: page + 1,
  });
}

module.exports = {
  fetchCarOwners,
  filterCarOwners,
};
