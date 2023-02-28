const express = require("express");

const {
  getReviews,
  addAReview,
  getAReview,
  updateAReview,
  deleteAReview
} = require("../controller/reviewsController");

const verifyJwt = require("../middlewares/verifyJwt");

const reviewsRouter = express.Router();

reviewsRouter.route("/").get(getReviews).post(verifyJwt, addAReview);

reviewsRouter
  .route("/:id")
  .get(getAReview)
  .patch(verifyJwt, updateAReview)
  .delete(verifyJwt, deleteAReview);

module.exports = reviewsRouter;
