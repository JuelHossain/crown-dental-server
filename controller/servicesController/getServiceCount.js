const { serviceCollection } = require("../../db/collections");

const getServiceCount = async (req, res) => {
  try {
    const count = await serviceCollection.countDocuments();
    res.send(count);
  } catch (err) {
    const error = "getting service count was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = getServiceCount;
