const { ObjectId } = require("mongodb");
const { appointmentCollection } = require("../../db/collections");

const getAAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    console.log(id);

    let query = { _id: ObjectId(id) };

    if (email ) {
      query = { serviceId: id, ratingBy: email };
    }

    const result = await appointmentCollection.findOne(query);
    res.send(result);
  } catch (err) {
    const error = "getting single appointment was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = getAAppointment;
