const express = require("express");

const {
  getAppointments,
  bookAAppointment,
  getAAppointment,
  updateAAppointment,
  deleteAAppointment
} = require("../controller/appointmentsController");

const verifyJwt = require("../middlewares/verifyJwt");

const appointmentsRouter = express.Router();

appointmentsRouter.route("/").get(getAppointments).post(verifyJwt, bookAAppointment);

appointmentsRouter
  .route("/:id")
  .get(getAAppointment)
  .patch(verifyJwt, updateAAppointment)
  .delete(verifyJwt, deleteAAppointment);

module.exports = appointmentsRouter;
