import { StyleSheet, Dimensions } from "react-native"

const Estilo = StyleSheet.create({


    
    tela: {
        backgroundColor: "#333"
    },

    camposup:{
        backgroundColor: "#111"
    },

    pesquisa: {
        backgroundColor: "#222",
        display: "flex",
        alignItems: "center",
        width: 320,
        alignSelf: "center",
        marginBottom: 45,
        marginTop: 45,
        borderRadius: 7
    },

    titulo: {
        color: "#fff",
        fontSize: 25,
        fontStyle: "Verdana",
        letterSpacing: 5,
        lineHeight: 40,
        marginVertical: 32,
        textAlign: "center",
        fontWeight: "bold",
    },

    imagem: {
        borderRadius: 7,
        height: 290,
        width: 310,
        marginTop: 5,
    },

    logo: {
        height: 200,
        resizeMode: "cover",
    },  

    paragrafo: {
        color: "#fff",
        fontSize: 14,
        paddingHorizontal: 16,
        textAlign: "justify",
    },

    dia: {
        color: "#888",
        textAlign: "center",
        fontSize: 14,
        margin: 10
    },

/*------------------------*/

    bold:{
        textDecorationLine: "underline",
        fontWeight: "bold",
        color: "#db8937"
    },

    desc:{
        fontSize: 20,
        textAlign: "center",
        color: "#777",
        padding: 10,
        letterSpacing: 2,
    },

    input:{
        fontSize: 24,
        color: "#db8937",
        padding: 0,
        marginRight: 100
    },

    botao:{
        fontSize: 25,
        backgroundColor: "#db8937",
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
        width: 350,
        borderRadius: 60,
        margin: 30,
        marginBottom: 0,
    },

    /*------------------------------------*/

    pesquisap: {
        backgroundColor: "#222",
        display: "flex",
        alignItems: "center",
        width: 363,
        alignSelf: "center",
        marginBottom: -2,
        marginTop: 0,
        borderRadius: 7
    },

    imagemp: {
        borderRadius: 0,
        height: 340,
        width: 360,
        marginTop: 0,
    },

    titulop: {
        color: "#fff",
        fontSize: 25,
        fontStyle: "Verdana",
        letterSpacing: 3,
        lineHeight: 40,
        marginVertical: 32,
        textAlign: "center",
        fontWeight: "bold",
    },

    paragrafop: {
        color: "#fff",
        fontSize: 20,
        paddingHorizontal: 16,
        textAlign: "justify"
    },

    diap: {
        color: "#888",
        textAlign: "center",
        fontSize: 14,
        margin: 10,
        marginTop: 35
    }
})

export default Estilo