const express = require("express")

const router = express()

const {createAluno} = require("./controllers/alunos")


router.post("/aluno", createAluno)

module.exports = router