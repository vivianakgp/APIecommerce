require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserService = require("../services/user.services");
const transporter = require("../utils/mailer");
const welcomeTemplete = require("../templates/welcome");

const authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await UserService.authUser(email, password);
    if (!result.isValid || !result.user) {
      res.status(401).json({ message: "invalid email or pass" });
    }
    const { id } = result.user;
    // create token
    const token = jwt.sign(id, process.env.JWT_SECRET, {
      algorithm: "HS512",
    });
    res.status(201).json({ token });
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "authentication error ",
    });
  }
};

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await UserService.createUser(data);
    res.status(201).json({ msg: "sussesful created user" });
    transporter.sendMail({
      from: "<vivianakgp@gmail.com>",
      to: result.email,
      subject: "Welcome to the best e-commerce ever =)",
      text: `Hello ${result.userName}`,
      html: welcomeTemplete(result.userName),
    });
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "failed create user ",
    });
  }
};
module.exports = {
  authUser,
  createUser,
};
