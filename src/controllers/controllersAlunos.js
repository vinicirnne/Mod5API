const { Aluno, Curso} = require("../models");

async function listar(req, res) {
    try{
        const alunos = await Aluno.findAll();
        res.json(alunos);
    } catch {
        res.status(500).json({erro: "erro ao listar Alunos"})
    }
}

async function buscarId(req, res) {
    try{
        const aluno = await Aluno.findByPk(req.params.id);
        if(!aluno) return res.status(404).json({erro: "Aluno não encontrado"});
        res.json(aluno);
    } catch {
        res.status(500).json({erro: "erro ao buscar aluno"})
    }
}

async function criar(req, res) {
  try {
    console.log(req.body); // DEBUG
    const novo = await Aluno.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      erro: "erro ao criar aluno",
      detalhe: error.message
    });
  }
}

async function atualizar(req, res) {
    try{
        const aluno = await Aluno.findByPk(req.params.id);
        if(!aluno) return res.status(404).json({erro: "Aluno não encontrado"});
        await aluno.update(req.body);
        res.json(500);
    } catch {
        res.status(500).json({erro: "Erro ao atualizar aluno"})
    }
}

async function deletar(req, res) {
    try {
 const aluno = await Aluno.findByPk(req.params.id);
 if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
 await aluno.destroy();
 res.json({ mensagem: "Aluno removido com sucesso!" });
 } catch {
 res.status(500).json({ erro: "Erro ao excluir aluno" });
 }
}

async function listarAlunoCurso(req, res) {
    try {
        const { id } = req.params;

        const aluno = await Aluno.findByPk(id, {
            include: {
                model: Curso,
                through: { attributes: [] }
            }
        });

        if (!aluno) {
            return res.status(404).json({ erro: "Aluno não encontrado" });
        }

        // A associação foi definida como belongsToMany(models.Curso), então
        // os cursos relacionados estarão em `aluno.Cursos` (pluralizado).
        return res.json(aluno.Cursos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro ao listar Alunos", detalhe: error.message });
    }
}

module.exports = {listar, buscarId, atualizar, deletar, criar, listarAlunoCurso};