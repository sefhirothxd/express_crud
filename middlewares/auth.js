const jwt = require("jsonwebtoken");

const authenticated = (req, res, next) => {
  const tokenHeaders = req.headers.authorization;
  const token = tokenHeaders.split(" ")[1];
  if (!token) {
    res.status(401).json({
      message: "No token provided",
    });
  } else {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        next();
      }
    });
  }
};

module.exports = authenticated;
