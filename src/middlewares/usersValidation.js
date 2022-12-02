const { Users } = require("../models");
const validateIfUserExists = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const userFound = await Users.findByPk(userId, {
      attributes: ["id", "userName", "email"],
    });
    // create a new property in req obj to add the user found
    req.userIsOk = userFound;
    if (userFound === null) {
      return res.status(400).json({ mng: "bad... The user does not exist" });
    }
    next();
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "ups!! error on validate if user existe middleware",
    });
  }
};
module.exports = validateIfUserExists;
