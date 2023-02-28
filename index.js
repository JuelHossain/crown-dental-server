require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./db/client");
const { serviceRouter, reviewsRouter, usersRouter, appointmentsRouter } = require("./routers");
const { getServiceCount } = require("./controller/servicesController");
const { getReviewCount } = require("./controller/reviewsController");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await client.connect();
    app.use("/users", usersRouter);
    app.use("/services", serviceRouter);
    app.use("/reviews", reviewsRouter);
    app.use("/appointments", appointmentsRouter);
    app.get("/serviceCount", getServiceCount);
    app.get("/reviewCount", getReviewCount);
  } catch (err) {
    console.log("There was some error", err);
  } finally {
    app.get("/", (req, res) => {
      res.send("Crown-dental-server is running .");
    });
    app.listen(port, () => {
      console.log("server is running on", port);
    });
  }
})();
