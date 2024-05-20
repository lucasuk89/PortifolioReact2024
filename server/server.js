const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, topic, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL.USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "Novo contato recebido",
    html: `
      <p>New contact received:</p>
      <p>Name: ${firstName} ${lastName}</p>
      <p>E-mail: ${email}</p>
      <p>Telefone: ${phoneNumber}</p>
      <p>Topic: ${topic}</p>
      <p>Mensagem: ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending the email");
    } else {
      console.log("E-mail recebido" + info.response);
      res.status(200).send("E-mail sent with sucess");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Working well in the ${PORT}`);
});
