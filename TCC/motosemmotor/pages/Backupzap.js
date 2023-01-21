import { StyleSheet, ScrollView, StatusBar, Text, View, Image, TextInput, TouchableWithoutFeedback, RecyclerViewBackedScrollViewBase } from "react-native"
import React, {useState} from "react"

const estilo = StyleSheet.create({
  pagina: {  
    backgroundColor: "#222" 
  },

  titulo: { 
    color: "red", 
    fontSize: 32, 
    fontStyle: "Mabry",
    marginVertical: 32,
    textAlign: "center"
  },

  paragrafo: {
    color: "#ddd", 
    margin: 32,
    fontSize: 24
  },

  imagem: {
    resizeMode: "center",
    width: 400,
    height: 200
  },

  input:{
    fontSize: 24,
    color: "#ddd",
    padding: 0,
    marginRight: 100
  },

  botao:{
    fontSize: 25,
    backgroundColor: "#FFCC33",
    padding: 0,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 50,
  },

  campo:{
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 500,
    justifyContent: "center",
    backgroundColor: "#444",
    height: 50,
    padding: 0,
    width: 400,
    borderRadius: 60,
  }
})


function Inicio() {

  const [ entrada, setEntrada ] = useState("")

  return <ScrollView style={ estilo.pagina }>

    <StatusBar barStyle="light-content" backgroundColor='#222' />

    <View>

      <Image 
        style={ estilo.imagem } 
        source={ require("../assets/Logo.png") }
      />

      <Text style={ estilo.paragrafo }>
        Uma Enciclopédia livre da DeepWeb
      </Text>
      <View style={estilo.campo}>

        <TextInput
          keyboardType="default" placeholder="Pesquize Aqui"
          value={entrada} onChange={setEntrada}
          style={estilo.input}
        />
    
        <TouchableWithoutFeedback onPress={() => alert(entrada)}>
          <View style={ estilo.botao }>
            <Text style={ estilo.botao }></Text>
          </View>
        </TouchableWithoutFeedback>
        
      </View>
    </View>

  </ScrollView>
  
}

export default Inicio