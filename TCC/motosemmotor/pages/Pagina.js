import { StyleSheet, ScrollView, StatusBar, Text, View, Image  } from "react-native"

const estilo = StyleSheet.create({
  pagina: {
    backgroundColor: "#222"
  },
})

function Pag() {
  return <ScrollView style={ estilo.pagina }>
    <StatusBar barStyle="light-content" backgroundColor='#222' />
        <View>

            

        </View>
  </ScrollView>
  
}

export default Pag