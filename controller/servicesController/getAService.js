const { ObjectId } = require("mongodb");
const { serviceCollection } = require("../../db/collections");

const getAService = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await serviceCollection.findOne(query);
    res.send(result);
  } catch (err) {
    const error = "getting a single service was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = getAService;
