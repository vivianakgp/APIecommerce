var jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = async (req, res, next) => {
  try {
    let token;
    const { userId } = req.params;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      // .replace("Bearer", ' ')
    }
    if (!token) {
      res.status(403).json({ status: "session invalid, token not provided" });
    }
    //validate token
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithm: "HS512",
    });
    const id = decoded;
    if (Number(userId) == id) {
      next();
    } else {
      res.status(400).json({ status: "invalid token" });
    }
  } catch (err) {
    next({ status: 400, errMsg: err, customMsg: "ups! verify token failed" });
  }
};
module.exports = authToken;
