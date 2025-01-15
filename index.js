// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController()

alunos.adicionarAluno('testandoaaa','fulano@email.com','84899798','5555555','tec em desenvolvimento');
alunos.listarAluno();