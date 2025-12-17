const express = require('express');

const app = express()

app.use(express.json());


const alunosRotas = require("./routes/routesAlunos");
app.use = ("/alunos", alunosRotas);

const cursosRotas = require("./routes/routesCursos");
app.use("/cursos", cursosRotas);

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`)
});