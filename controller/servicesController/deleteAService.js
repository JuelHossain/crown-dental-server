const { ObjectId } = require("mongodb");
const { serviceCollection } = require("../../db/collections");

const deleteAService = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await serviceCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    const error = "deleting a single service  was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = deleteAService;
