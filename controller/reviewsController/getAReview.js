const { ObjectId } = require("mongodb");
const { reviewCollection } = require("../../db/collections");

const getAReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    console.log(id);

    let query = { _id: ObjectId(id) };

    if (email ) {
      query = { serviceId: id, ratingBy: email };
    }

    const result = await reviewCollection.findOne(query);
    res.send(result);
  } catch (err) {
    const error = "getting single review was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = getAReview;
