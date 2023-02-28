const { reviewCollection } = require("../../db/collections");

const getReviewCount = async (req, res) => {
  try {
    const count = reviewCollection.countDocuments();
    res.send(count);
  } catch (err) {
    const error = "getting  reviews count was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = getReviewCount;
