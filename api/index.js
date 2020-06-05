const router = require("express").Router();

module.exports = function apiRoutes(app) {
  router.get("/", function handler(req, res, next) {
    return res.status(200).json({ online: true });
  });
  return router;
};
