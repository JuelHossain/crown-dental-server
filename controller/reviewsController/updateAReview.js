const { ObjectId } = require("mongodb");
const { reviewCollection } = require("../../db/collections");

// this api update a review based on a id

const updateAReview = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const updatedReview = req.body;
    console.log(updatedReview)
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };

    const updatedDoc = {
      $set: updatedReview
    };

    const result = await reviewCollection.updateOne(filter, updatedDoc, options);
    res.send(result);
  } catch (err) {
    const error = "updating reviews was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = updateAReview;
