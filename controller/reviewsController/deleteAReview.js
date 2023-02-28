const { ObjectId } = require("mongodb");
const { reviewCollection } = require("../../db/collections");

const deleteAReview = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await reviewCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    const error = "deleting a reviews was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = deleteAReview;
