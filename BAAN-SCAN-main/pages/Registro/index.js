import React, {useState} from "react";
import { Text, StyleSheet,TouchableOpacity, ScrollView,TextInput } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'









export default function NovoVisit(){
    const navigation = useNavigation();



    return (

        <ScrollView style={styles.page}>
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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro1')} delay={750}>
                    <Text style={styles.buttonText}>Consultar</Text>
                    <AntDesign name='search1' style={styles.lupa} size={20} color={'white'}></AntDesign>
            </TouchableOpacity>

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
        marginTop: 60,
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
    consult:{
        backgroundColor: '#ED2E38',
        height: 45,
        width: '50%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        left: '25%',
        top: '-%',
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
    pick: {
        height: 150, 
        width: '30%',
        marginLeft: 140,
        marginTop: -55
    },
    qrcode1:{
    }


})