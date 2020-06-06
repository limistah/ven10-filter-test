const router = require("express").Router();
const filtersHandler = require("./filters");
const carOwnersHandler = require("./carOwners");

module.exports = function apiRoutes(app) {
  router.get("/", function handler(req, res, next) {
    return res.status(200).json({ online: true });
  });
  // Filters
  router.get("/filters", filtersHandler.fetchFilters);
  // Car owners
  router.get("/car-owners", carOwnersHandler.fetchCarOwners);
  router.post("/car-owners/filter", carOwnersHandler.filterCarOwners);
  // Unregistered routes
  router.all("*", function handler(req, res, next) {
    return res.status(404).json({ error: { msg: "Not Found" } });
  });
  return router;
};
