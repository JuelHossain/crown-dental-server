const express = require("express");
const {
  getUsers,
  getAUser,
  updateAUser,
  deleteAUser,
  authenticate
} = require("../controller/usersController");

const usersRouter = express.Router();

usersRouter.route("/").get(getUsers).put(authenticate);

usersRouter.route("/:email").get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = usersRouter;
