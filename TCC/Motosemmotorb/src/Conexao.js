import mongoose from "mongoose"

const endereço = "mongodb+srv://admin:wzLsUIyAcvP2bmdj@web.elklbpy.mongodb.net/?retryWrites=true&w=majority"

const opcao = { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(endereço, opcao, function() {
    console.log("BANCO DE DADOS FUNFANDO")
})