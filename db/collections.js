const client = require("./client");
const db = client.db("crown-dental-basic");

module.exports = {
  usersCollection: db.collection("users"),
  serviceCollection: db.collection("services"),
  reviewCollection: db.collection("reviews"),
  reviewCollection: db.collection("appointments"),
};
