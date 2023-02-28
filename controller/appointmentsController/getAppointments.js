const { appointmentCollection } = require("../../db/collections");

const getAppointments = async (req, res) => {
  try {
    const page = parseInt(req.query?.page, 10);
    const size = parseInt(req.query?.size, 10);
    const { serviceId, email } = req.query ?? {};
    let query = {};
    if (serviceId && email) {
      query = { serviceId, ratingBy: email };
    } else if (email) {
      query = { ratingBy: email };
    } else if (serviceId) {
      query = { serviceId };
    }

    const cursor = appointmentCollection.find(query).sort({ ratedAt: -1 });

    let appointments;

    if (page || size) {
      appointments = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
    } else {
      appointments = await cursor.toArray();
    }

    res.send(appointments);
  } catch (err) {
    const error = "getting appointments was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = getAppointments;
