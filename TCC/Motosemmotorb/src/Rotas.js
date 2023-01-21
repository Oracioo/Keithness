import express from "express"
import Dados  from "./Dados.js"
import {Types, isValidObjectId} from "mongoose"

const rotas = express.Router()

rotas.get("/pesquisas", function(requisicao, resposta){

    Dados.find()

        .then(function(resultados) {

            resposta.status(200).json(resultados)

        })

        .catch(function(erro) {
            
            console.log(erro.message)

            resposta.statusCode(500)

        })

})

rotas.get("/pesquisa/:id", function(requisicao, resposta) {

    const { id } = requisicao.params
    
    if (isValidObjectId(id)){

        Dados.findById( Types.ObjectId(id) )

        .then(function(resultado){
            resposta.status(200).json(resultado)
        })

        .then(function(erro){
            console.log(erro.message)
            resposta.statusCode(500)
        })

    }
})

rotas.post("/pesquisa", function(requisicao, resposta){
    const resultado = requisicao.body
    
    const novaPesquisa = new Dados({
        imagem: resultado.imagem,
        titulo: resultado.titulo,
        conteudo: resultado.conteudo,
        datapub: new Date(resultado.datapub),
    })

    novaPesquisa.save()

        .then(function(resultado) {
            resposta.status(201).json(resultado)
        })

        .catch(function(erro) {
            console.log(erro.message)
            resposta.statusCode(500)
        })
}) 

rotas.get("*", function(requisicao, resposta) {
    resposta.sendStatus(404)
})

export default rotas