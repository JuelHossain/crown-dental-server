const { reviewCollection } = require("../../db/collections");

const getReviews = async (req, res) => {
  try {
    const page = parseInt(req.query?.page, 10);
    const size = parseInt(req.query?.size, 10);
    const { serviceId, email } = req.query ?? {};
    let query = {};
    if (serviceId && email) {
      query = { serviceId, ratingBy: email };
    } else if (email) {
      query = { ratingBy: email };
    } else if (serviceId) {
      query = { serviceId };
    }

    const cursor = reviewCollection.find(query).sort({ ratedAt: -1 });

    let reviews;

    if (page || size) {
      reviews = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
    } else {
      reviews = await cursor.toArray();
    }

    res.send(reviews);
  } catch (err) {
    const error = "getting reviews was not successfull";
    res.status(500).send(error);
    console.log(err, error);
  }
};

module.exports = getReviews;
