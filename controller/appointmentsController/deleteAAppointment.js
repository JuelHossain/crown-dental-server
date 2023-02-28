const { ObjectId } = require("mongodb");
const { appointmentCollection } = require("../../db/collections");

const deleteAAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await appointmentCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    const error = "deleting a appointments was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = deleteAAppointment;
