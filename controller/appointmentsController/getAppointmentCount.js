const { appointmentCollection } = require("../../db/collections");

const getAppointmentCount = async (req, res) => {
  try {
    const count = appointmentCollection.countDocuments();
    res.send(count);
  } catch (err) {
    const error = "getting  appointments count was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = getAppointmentCount;
