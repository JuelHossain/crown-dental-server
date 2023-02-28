const { serviceCollection } = require("../../db/collections");

// this api adds a service on the service collection

const addAService = async (req, res) => {
  try {
    const newService = req.body;
    const result = await serviceCollection.insertOne(newService);
    res.send(result);
  } catch (err) {
    const error = "adding a  service  was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = addAService;
