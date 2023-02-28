const { serviceCollection } = require("../../db/collections");

const getServices = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);
    const query = {};
    const cursor = serviceCollection.find(query).sort({ createdAt: -1 });

    let services;

    if (page || size) {
      services = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
    } else {
      services = await cursor.toArray();
    }

    res.send(services);
  } catch (err) {
    const error = "getting all services  was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = getServices;
