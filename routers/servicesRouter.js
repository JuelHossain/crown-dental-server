const express = require("express");
const verifyJwt = require("../middlewares/verifyJwt");

const {
  getAService,
  addAService,
  getServices,
  updateAService,
  deleteAService
} = require("../controller/servicesController");

const serviceRouter = express.Router();

serviceRouter.route("/").get(getServices).post(verifyJwt, addAService);

serviceRouter
  .route("/:id")
  .get(getAService)
  .patch(verifyJwt, updateAService)
  .delete(verifyJwt, deleteAService);

module.exports = serviceRouter;
