const  express = require('express');
const controller = require("../controllers/matriculasControllers");

const rota = express.Router();

rota.post("/", controller.CriarMatricula);

module.exports = rota;