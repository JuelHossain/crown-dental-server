const getAAppointment = require("./getAAppointment");
const getAppointments = require("./getAppointments");
const updateAAppointment = require("./updateAAppointment");
const bookAAppointment = require("./bookAAppointment");
const getAppointmentCount = require("./getAppointmentCount");
const deleteAAppointment = require("./deleteAAppointment");

module.exports = {
  getAppointments,
  getAAppointment,
  updateAAppointment,
  bookAAppointment,
  getAppointmentCount,
  deleteAAppointment
};
