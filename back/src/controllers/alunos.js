const knex = require("../knex")

const createAluno = async (req, res) =>{

    const {nome, email, linkedin, inicio, telefone, signo} = req.body 

    try{

        const aluno = await knex('aluno').insert({nome, inicio, telefone, email, linkedin, signo}).returning("*")

        if(!aluno){
            return res.status(404).json({
                message: "Aluno não pode ser cadastrado"
            })
        }

        return res.status(201).json(aluno)



    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createAluno
}