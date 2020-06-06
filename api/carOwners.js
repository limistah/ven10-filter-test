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
  return res.status(200).json({});
}

module.exports = {
  fetchCarOwners,
  filterCarOwners,
};
