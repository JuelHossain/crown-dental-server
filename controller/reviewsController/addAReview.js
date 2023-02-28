const { reviewCollection } = require("../../db/collections");

// this api adds a service on the service collection

const addAReview = async (req, res) => {
  try {
    const newReview = req.body;
    const result = await reviewCollection.insertOne(newReview);
    res.send(result);
  } catch (err) {
    const error = "adding a reviews was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = addAReview;
