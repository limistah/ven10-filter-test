function fetchFilters(req, res, next) {
  return res.status(200).json({
    data: [],
    total: 0,
    limit: 10,
    page: 1,
  });
}

module.exports = {
  fetchFilters,
};
