---aplicação que visa a interação de Gestão de Alunos,Cursos e Matriculas--

como rodar esta aplicação?
Clone esse arquivo em uma pasta do seu Visual Studio ou afins,
após clonar você deve baixar as dependências que são - npm install express, npm install sequelize sqlite3 e caso as migrations não rodem use: npx sequelize db:migrate,
para rodar a aplicação apenas dê um node src/server.js(verifique se esta na pasta fonte que foi clonada), após isso faça os testes no postman ou insomnia.

Os principais endpoins de funcionalidade da aplicação são os POST /alunos(CRIAÇÂO DE ALUNO), POST /cursos(CRIAÇÂO DE CURSOS), GET /alunos/:id/cursos(LISTA TODOS OS CURSOS POR ALUNO), GET /cursos/:id/alunos(LISTA TODOS OS ALUNOS POR CURSO

Teste de criação de Aluno:  <img width="1076" height="839" alt="CriarAluno" src="https://github.com/user-attachments/assets/cd621426-e324-4715-94f8-e71edddc25e2" />
Teste de Criação de Curso:  <img width="1312" height="854" alt="CriarCurso" src="https://github.com/user-attachments/assets/e1dc0bba-47a7-40f6-9801-daa942ceee4a" />
Teste de Listar Curso por Aluno: <img width="1279" height="837" alt="ListarCursoPorAluno" src="https://github.com/user-attachments/assets/8be86113-1dc5-4e9c-9cd7-9478ff0d4db6" />
Teste de Listar Aluno por Curso: <img width="1264" height="834" alt="ListarAlunoPorCurso" src="https://github.com/user-attachments/assets/11039c8a-ee05-426d-aee7-ae751bee1f05" />
