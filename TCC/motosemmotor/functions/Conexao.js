import axios from "axios"

async function ObterPesquisas(){

    return await axios.get("http://localhost:4000/pesquisas")

}

async function ObterPesquisasCod(codigo){

    return await axios({
        method: "GET",
        url: "http://localhost:4000/pesquisa/${codigo}"
    })
}

async function CadastrarPesquisa(codigo, imagem, titulo, conteudo){

    return await axios({
        method: "POST",
        url: "http://localhost:4000/pesquisas",
        data: {
            "codigo": codigo,
            "imagem": imagem,
            "titulo": titulo,
            "conteudo": conteudo,
            "datapub": new Date().toLocaleString("pt-BR", {year:"numeric", month:"numeric", day:"numeric"})
        }
    }, [])
}

export { ObterPesquisas, ObterPesquisasCod, CadastrarPesquisa }