const { Matricula, Curso, Aluno } = require("../models");

async function CriarMatricula(req, res) {
  try {
    const { alunoId, cursoId, dataMatricula } = req.body;

    // validação: ambos alunoId e cursoId são obrigatórios
    if (!alunoId || !cursoId) {
      return res.status(400).json({ erro: "AlunoId e cursoId são obrigatórios" });
    }

    const aluno = await Aluno.findByPk(alunoId);
    if (!aluno) {
      return res.status(404).json({ erro: "Aluno não encontrado" });
    }

    const curso = await Curso.findByPk(cursoId);
    if (!curso) {
      return res.status(404).json({ erro: "Curso não encontrado" });
    }

    // verificar se já existe matrícula
    const matriculaE = await Matricula.findOne({ where: { alunoId, cursoId } });
    if (matriculaE) {
      return res.status(400).json({ erro: "Aluno já matriculado neste curso" });
    }

    const matricula = await Matricula.create({ alunoId, cursoId, dataMatricula });

    return res.status(201).json(matricula);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao realizar matricula", detalhe: error.message });
  }
}

module.exports = { CriarMatricula };