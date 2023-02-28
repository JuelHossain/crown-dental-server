const client = require("./client");
const db = client.db("pro-dentist");

module.exports = {
  usersCollection: db.collection("users"),
  serviceCollection: db.collection("services"),
  reviewCollection: db.collection("reviews")
};
