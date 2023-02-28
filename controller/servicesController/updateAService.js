const { ObjectId } = require("mongodb");
const { serviceCollection } = require("../../db/collections");

// this api update a service based on a id

const updateAService = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = req.body;
    const filter = { _id: ObjectId(id) };

    const updatedDoc = {
      $set: updatedService
    };

    const result = await serviceCollection.updateOne(filter, updatedDoc);
    res.send(result);
  } catch (err) {
    const error = "updating a service was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = updateAService;
