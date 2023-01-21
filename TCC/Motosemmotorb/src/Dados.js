import mongoose from "mongoose"

const esquema = new mongoose.Schema({
    imagem: String,
    titulo: String,
    conteudo: String,
    datapub: Date
})

const Dados = mongoose.model("pesquisa", esquema)

export default Dados 