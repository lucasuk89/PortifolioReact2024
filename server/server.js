const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lucasuk89@gmail.com",
    pass: "uizwovgvbermejrz",
  },
});

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, topic, message } = req.body;

  app.get("/", (req, res) => {
    res.send("Hello World!"); // Exemplo de resposta para solicitação GET para o endpoint raiz
  });

  const mailOptions = {
    from: "SEU_EMAIL@gmail.com",
    to: "lucasuk89@gmail.com",
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
      alert("Your email has been sent");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Working well in the ${PORT}`);
});
