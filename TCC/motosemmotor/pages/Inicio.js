import axios from "axios";
import React, {useState, useEffect} from "react"
import { ScrollView, View, Text, Image, StatusBar } from "react-native";

function Inicio() {

  const [ pesquisas, definirPesquisas ] = useState([])

  useEffect(function() {

    axios.get("http://26.94.162.98:4000/pesquisas")

      .then(function(resultado) {
        if (resultado.status === 200) {
          console.log(resultado.data)
          definirPesquisas(resultado.data)
        }
        else
          console.error(resultado.status)
      })

      .catch(function(erro) {
        console.error(erro)
      })

      
  }, [])
     
  return <ScrollView>

    <StatusBar barStyle="light-content" backgroundColor="#222"/> 

    { 
    pesquisas.lenght > 0 ?

      pesquisas.map(function(pesquisa, indice) {

        const data = new Date(pesquisa.datapub)
        const dataconv = data.toLocaleDateString("pt-BR")
 
        return <View key={indice}>

          <Image source={{ uri:pesquisa.imagem }} /*style={ Estilo.imagem}*/ />

          <Text> { pesquisa.titulo } </Text>

          <Text> { pesquisa.conteudo } </Text>

          <Text> { dataconv } </Text>

        </View>
      })

      :

      <View>
        <Text> Pesquisa Não Encontrada! </Text> 
      </View>
    }
    
  </ScrollView>

}


export default Inicio