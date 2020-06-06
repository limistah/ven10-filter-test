const router = require("express").Router();
const filtersHandler = require("./filters");
const carOwnersHandler = require("./carOwners");

module.exports = function apiRoutes(app) {
  router.get("/", function handler(req, res, next) {
    return res.status(200).json({ online: true });
  });
  // Filters
  router.get("/filters", filtersHandler.fetchFilters);
  router.get("/car-owners", carOwnersHandler.fetchCarOwners);
  // Unregistered routes
  router.all("*", function handler(req, res, next) {
    return res.status(404).json({ error: { msg: "Not Found" } });
  });
  return router;
};
