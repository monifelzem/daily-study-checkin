const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public")); // Servir arquivos estáticos na pasta 'public'

// Rota para a página de check-in
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Rota para receber os dados do formulário
app.post("/checkin", (req, res) => {
  const { name, studyTime } = req.body;
  console.log(`Check-in de ${name} com ${studyTime} horas de estudo.`);
  res.send("Check-in realizado com sucesso!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
