const { ObjectId } = require("mongodb");
const { appointmentCollection } = require("../../db/collections");

// this api update a appointment based on a id

const updateAAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const updatedAppointment = req.body;
    console.log(updatedAppointment);
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };

    const updatedDoc = {
      $set: updatedAppointment
    };

    const result = await appointmentCollection.updateOne(filter, updatedDoc, options);
    res.send(result);
  } catch (err) {
    const error = "updating appointments was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = updateAAppointment;
