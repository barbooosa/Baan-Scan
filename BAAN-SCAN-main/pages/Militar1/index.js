import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'





export default function Militar(){
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
                <Text style={styles.slogan} >Militar</Text>
            </Animatable.Text>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <AntDesign name="home" size={36} color="white" backgroundColor='#2A5679' style={styles.home} />
            </TouchableOpacity>
            <Text style={styles.title}>Nome</Text>
            <TextInput placeholder="Digite o nome do Militar..." style={styles.input}></TextInput>
            <Text style={styles.rnv}>Número de Ordem</Text>
            <TextInput placeholder="Digite o Número de Ordem..." style={styles.renavam}></TextInput>
            <TouchableOpacity style={styles.button} delay={750}>
                    <Text style={styles.buttonText}>Consultar</Text>
                    <AntDesign name='search1' style={styles.lupa} size={20} color={'white'}></AntDesign>
            </TouchableOpacity>
            <Text style={styles.esq1}>Unidade</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq1}>Email</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq1}>Posto</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq1}>Nome de Guerra</Text>
            <View style={styles.esq}></View>
            <Text style={styles.dire1}></Text>
            <Text style={styles.dire1}></Text>
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
        left: '15%'


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
        width: '60%',
        left: '17%',
        top: '4%'
    },
    esq1:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        left: '17%',
        top: '4%'
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

})