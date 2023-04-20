const nodemailer = require("nodemailer");
import Mail from "nodemailer/lib/mailer";
import { HOSTNAME, EMAILPORT, USER, PASS } from '../../constants/secret';


const createGmailTransporter = () => {
  const hostname = HOSTNAME;
  const port = EMAILPORT;
  const user = USER;
  const pass = PASS;

  const transporter = nodemailer.createTransport({
    host: hostname,
    port: port,
    secure: true,
    auth: {
      user,
      pass,
    },
    logger: false,
  });
  return transporter;
};

export const sendNodemailer = async (data: Mail.Options) => {
  const transporter = createGmailTransporter();
  const info = await transporter.sendMail(data);
  return info;
};
