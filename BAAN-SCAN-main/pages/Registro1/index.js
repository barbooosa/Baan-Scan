import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'





export default function Carro(){
    const navigation = useNavigation();
    
    return (

        <ScrollView>
            <Animatable.View style={styles.container}>
                <Animatable.Image
                animation="slideInDown"
                source={require('../../fotos/logo_menor1.png')}
                style={styles.logo}
                resizeMode="contain"/>
            </Animatable.View>
            <Animatable.Text animation='fadeInLeft'delay={500} style={styles.sloganHeader} >
                <Text style={styles.slogan} >Entrada/Saída</Text>
            </Animatable.Text>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <AntDesign name="home" size={36} color="white" backgroundColor='#2A5679' style={styles.home} />
            </TouchableOpacity>
            <Text style={styles.title}>CPF do Visitante</Text>
            <TextInput placeholder="Digite o CPF do Visitante..." style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button} delay={750}>
                    <Text style={styles.buttonText}>Consultar</Text>
                    <AntDesign name='search1' style={styles.lupa} size={20} color={'white'}></AntDesign>
            </TouchableOpacity>
            <Text style={styles.esq1}>Nome</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq3}>Autorizador</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq4}>Hora de entrada</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq2}>Hora de saída</Text>
            <View style={styles.esq}></View>
            <Text style={styles.dire1}></Text>
            <Text style={styles.dire1}></Text>


        </ScrollView>

    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2A5679',
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 160
    },
    logo:{
        marginHorizontal: '41%',
        marginTop: 37

    },
    title:{
        fontSize: 16,
        marginTop: 10,
        left: '15%',
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        backgroundColor: '#CBCBCB',
        borderRadius: 8,
        width: '65%',
        left: '15%'
    },
    rnv:{
        fontSize: 16,
        marginTop: 10,
        left: '15%'

    },
    renavam:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        backgroundColor: '#CBCBCB',
        borderRadius: 8,
        width: '65%',
        left: '15%'
    },
    home:{
        top: -100,
        width: 37,
        left: 30
    },
    button:{
        backgroundColor: '#ED2E38',
        height: 45,
        width: '50%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        left: '22%'
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        top: '25%',
        left: '-1%'
    },
    lupa:{
        left: 74,
        top: -13,

    },
    esq:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        backgroundColor: '#CBCBCB',
        borderRadius: 8,
        width: '40%',
        left: '27%',
        top: '4%'
    },
    esq1:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        left: '41%',
        top: '4%'
    },
    cadastro:{
        backgroundColor: '#ED2E38',
        height: 45,
        width: '50%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        left: '25%',
        top: '-25%',
    },
    slogan:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2A5679',    
        fontWeight: '700',
    },
    sloganHeader:{
        top: 10,
        left: '3%'
    },
    page:{
        flex:1,
        height: 800,
        color: 'white',
    },
    esq2:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        left: '35%',
        top: '4%'
    },
    esq3:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        left: '37%',
        top: '4%'
    },
    esq4:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        left: '33%',
        top: '4%'
    }


})