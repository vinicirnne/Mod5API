const express = require('express');
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

// Rotas
const alunosRotas = require("./routes/routesAlunos");
app.use("/alunos", alunosRotas);

const cursosRotas = require("./routes/routesCursos");
app.use("/cursos", cursosRotas);

const matriculasRotas = require("./routes/routesMatriculas");
app.use("/matriculas", matriculasRotas);

const porta = 3000;


sequelize.sync({ alter: true })
  .then(() => {
    console.log("Banco sincronizado com sucesso");
    app.listen(porta, () => {
      console.log(`Servidor rodando em: http://localhost:${porta}`);
    });
  })
  .catch(err => {
    console.error("Erro ao sincronizar banco:", err);
  });


