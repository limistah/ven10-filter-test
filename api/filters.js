const Filters = require("../models/filters");

async function fetchFilters(req, res, next) {
  let { limit, page } = req.query;

  limit = parseInt(limit || 10);
  page = parseInt(page || 0);

  const skip = limit * page;

  const filters = await Filters.find({}).limit(limit).skip(skip);
  const total = await Filters.find({}).countDocuments();

  return res.status(200).json({
    data: filters,
    total: total,
    limit: limit,
    page: page + 1,
  });
}

module.exports = {
  fetchFilters,
};
