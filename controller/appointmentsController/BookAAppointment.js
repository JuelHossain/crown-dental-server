const { appointmentCollection } = require("../../db/collections");

// this api adds a appointment on the appointment collection

const bookAnAppointment = async (req, res) => {
  try {
    const newAppointment = req.body;
    const result = await appointmentCollection.insertOne(newAppointment);
    res.send(result);
  } catch (err) {
    const error = "adding a appointments was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = bookAnAppointment;
