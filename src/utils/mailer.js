const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "vivianakgp@gmail.com",
    pass: process.env.GOOGLE_PASS,
  },
});
module.exports = transporter;
