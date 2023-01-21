import React, { useState, useEffect } from "react"
import * as Notifications from "expo-notifications"
import { ScrollView, View, Text, Image, StatusBar, TextInput, TouchableWithoutFeedback } from "react-native"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Estilo from "./App.Style.js"

import axios from "axios"

Notifications.setNotificationHandler({

    handleNotification: async () => ({

        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,

    })

})

function PaginaInicial({ navigation }) {

    const [ pesquisas, definirPesquisas ] = useState([])
    const [ filtro, definirFiltro ] = useState([]) 
    const [ termo, definirTermo ] = useState("")

    useEffect(function() {

        axios.get("http://192.168.1.3:4000/pesquisas")

            .then(function(resultado) {
                if (resultado.status === 200)
                    definirPesquisas(resultado.data)
                else
                    console.error(resultado.status)
            })
        
            .catch(function(erro) {
                console.error(erro)
            })

    }, [])

    function Filtrar() {
        const termoFormatado = termo.toUpperCase()
        const resultados = pesquisas.filter(function(pesquisa) {
            const pesquisaFormatado = pesquisa.titulo.toUpperCase()
            return pesquisaFormatado.indexOf(termoFormatado) !== -1
        })
        definirFiltro(resultados)
    }

    return <ScrollView style={ Estilo.tela }>

        <StatusBar barStyle="light-content" backgroundColor="#222"/>

        <View style={Estilo.camposup}>

            <Image source={{ uri: "https://i.ibb.co/PCNBqtP/Logo.png" }} style={ Estilo.logo }/>

            <Text style={ Estilo.desc }>
                <Text style={Estilo.bold}>Keithness</Text>
                _a_<Text style={Estilo.bold}>sua</Text> 
                _enciclopedia_livre_de_ 
                <Text style={Estilo.bold}>Fake_News</Text>
            </Text>

        </View>

        <View style={Estilo.campo}>

            <TextInput value={ termo } onChangeText={ (termo) => definirTermo(termo)  } keyboardType="default" placeholder="Pesquize Aqui" style={Estilo.input} />
    
            <TouchableWithoutFeedback onPress={ Filtrar }>
                <View style={ Estilo.botao }>
                    <Text style={ Estilo.botao }></Text>
                </View>
            </TouchableWithoutFeedback>
        
        </View>
                
        { pesquisas.length > 0 && filtro.length == 0?

            pesquisas.map(function(pesquisa, indice) {

                const data = new Date(pesquisa.datapub)
                const dataconv = data.toLocaleDateString("pt-BR")

                return <TouchableWithoutFeedback onPress={ () => navigation.navigate("PaginaPesquisa", { pesquisa: pesquisa }) }>

                    <View key={ indice } style={ Estilo.pesquisa }>

                        <Image source={{ uri: pesquisa.imagem }} style={ Estilo.imagem }/>

                        <Text style={ Estilo.titulo }> { pesquisa.titulo } </Text>

                        <Text style={ Estilo.paragrafo }> { pesquisa.conteudo } </Text>

                        <Text style={ Estilo.dia }> Data: { dataconv } </Text>

                    </View>

                </TouchableWithoutFeedback>

            })
            
            :

            <>
            </>
        }   

        { filtro.length > 0 &&

            filtro.map(function(pesquisa, indice) {

                const data = new Date(pesquisa.datapub)
                const dataconv = data.toLocaleDateString("pt-BR")

                return <TouchableWithoutFeedback onPress={ () => navigation.navigate("PaginaPesquisa", { pesquisa: pesquisa }) }>

                    <View key={ indice } style={ Estilo.pesquisa }>

                        <Image source={{ uri: pesquisa.imagem }} style={ Estilo.imagem }/>

                        <Text style={ Estilo.titulo }> { pesquisa.titulo } </Text>

                        <Text style={ Estilo.paragrafo }> { pesquisa.conteudo } </Text>

                        <Text style={ Estilo.dia }> Data: { dataconv } </Text>

                    </View>

                </TouchableWithoutFeedback>

            })

        }

    </ScrollView>
}

function PaginaPesquisa({ route, navigation }) {

    const pesquisa = route.params.pesquisa

    const data = new Date(pesquisa.datapub)
    const dataconv = data.toLocaleDateString("pt-BR")

    return <ScrollView style={ Estilo.tela }>

        <StatusBar barStyle="light-content" backgroundColor="#222"/>

        <View style={Estilo.camposup}>

            <Image source={{ uri: "https://i.ibb.co/PCNBqtP/Logo.png" }} style={ Estilo.logo }/>

            <Text style={ Estilo.desc }>
                <Text style={Estilo.bold}>Keithness</Text>
                , a <Text style={Estilo.bold}>sua</Text> 
                enciclopedia livre de 
                <Text style={Estilo.bold}>Fake News</Text>
            </Text>

        </View>
                
        <View style={ Estilo.pesquisap }>

            <Image source={{ uri: pesquisa.imagem }} style={ Estilo.imagemp }/>

            <Text style={ Estilo.titulop }> { pesquisa.titulo } </Text>

            <Text style={ Estilo.paragrafop }> { pesquisa.conteudo } </Text>

            <Text style={ Estilo.diap }> Data: { dataconv } </Text>

        </View>

    </ScrollView>
}

export default function App() {
    return <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaInicial" screenOptions={{ headerShown: false }}>
  
        <Stack.Screen name="PaginaInicial" component={ PaginaInicial } />
  
        <Stack.Screen name="PaginaPesquisa" component={ PaginaPesquisa } />
  
      </Stack.Navigator>
    </NavigationContainer>
}