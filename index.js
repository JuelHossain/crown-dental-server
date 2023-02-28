require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./db/client");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await client.connect();
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
