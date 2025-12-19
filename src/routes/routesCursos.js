const express = require('express');
const controller = require("../controllers/controllersCursos");

const rota = express.Router();

rota.get("/", controller.listar);
rota.get("/:id", controller.buscarId);
rota.post("/", controller.criar);
rota.put("/:id", controller.atualizar);
rota.delete("/:id", controller.deletar);

module.exports = rota;