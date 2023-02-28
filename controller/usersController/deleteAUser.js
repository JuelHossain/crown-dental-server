const { serviceCollection } = require("../../db/collections");

const deleteAUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await serviceCollection.deleteOne({ email });
    res.send(result);
  } catch (err) {
    const error = "deleting a single service  was not successfull";
    res.status(500).send(error);
    console.log(err);
  }
};

module.exports = deleteAUser;
