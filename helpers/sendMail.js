const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAIL_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "annazau@meta.ua",
    pass: MAIL_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  await transport.sendMail(data);
  return true;
};

module.exports = sendMail;
