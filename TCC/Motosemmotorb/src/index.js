import express from "express"
import cors from "cors"

import "./Conexao.js"

import rotas from "./Rotas.js"

const servidor = express()

servidor.use(express.json())
servidor.use(rotas)
servidor.use(cors())

servidor.listen(4000, function(){
    console.log("FUNFANO")
})