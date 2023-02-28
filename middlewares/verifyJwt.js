const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ message: "unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send({ message: "forbidden" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (err) {
    const error = "user authentication was not completed successfully there was an error ";
    res.status(500).send(error);
    console.log(err, error);
  }
};
module.exports = verifyJwt;
