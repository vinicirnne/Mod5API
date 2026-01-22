const { Curso, Aluno } = require("../models");

async function listar(req, res) {
    try{
        const cursos = await Curso.findAll();
        res.json(cursos);
    } catch {
        res.status(500).json({erro: "erro ao listar Cursos"})
    }
}

async function buscarId(req, res) {
    try{
        const curso = await Curso.findByPk(req.params.id);
        if(!curso) return res.status(404).json({erro: "curso não encontrado"});
        res.json(curso);
    } catch {
        res.status(500).json({erro: "erro ao buscar curso"})
    }
}

async function criar(req, res) {
    try{
    const novo = await Curso.create(req.body);
    res.status(201).json(novo)
    } catch{
        res.status(500).json({erro: "erro ao criar curso"});
    }
}

async function atualizar(req, res) {
    try{
        const curso = await Curso.findByPk();
        if(!curso) return res.status(404).json({erro: "Curso não encontrado"});
        await curso.update(req.body);
        res.json(500);
    } catch {
        res.status(500).json({erro: "Erro ao atualizar curso"})
    }
}

async function deletar(req, res) {
    try {
 const curso = await Curso.findByPk(req.params.id);
 if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
 await curso.destroy();
 res.json({ mensagem: "Curso removido com sucesso!" });
 } catch {
 res.status(500).json({ erro: "Erro ao excluir curso" });
 }
}

async function ListarCursosAlunos(req, res) {
    try{
        const { id } = req.params;

        const cursos = await Curso.findByPk(id, {
            include: {
                model: Aluno,
                through: { attributes: []}
            }
        });

        if(!cursos){
            return res.status(404).json({erro: "Curso não encontrado"})
        }
        return res.json(cursos.Alunos)
    } catch{
        return res.status(500).json({erro: "Erro ao listar por Aluno"});
    }
}

module.exports = {listar, buscarId, atualizar, deletar, criar, ListarCursosAlunos};