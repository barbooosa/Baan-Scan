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
                <Text style={styles.slogan} >Veículo</Text>
            </Animatable.Text>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <AntDesign name="home" size={36} color="white" backgroundColor='#2A5679' style={styles.home} />
            </TouchableOpacity>
            <Text style={styles.title}>Placa</Text>
            <TextInput placeholder="Digite a placa do veículo..." style={styles.input}></TextInput>
            <Text style={styles.rnv}>Renavam</Text>
            <TextInput placeholder="Digite o renavam do veículo..." style={styles.renavam}></TextInput>
            <TouchableOpacity style={styles.button} delay={750}>
                    <Text style={styles.buttonText}>Consultar</Text>
                    <AntDesign name='search1' style={styles.lupa} size={20} color={'white'}></AntDesign>
            </TouchableOpacity>
            <Text style={styles.esq1}>Placa</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq1}>Renavam</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq1}>Chassi</Text>
            <View style={styles.esq}></View>
            <Text style={styles.esq1}>Roubo/Furto</Text>
            <View style={styles.esq}></View>
            <Text style={styles.dire1}>Marca/Modelo</Text>
            <View style={styles.dire}></View>
            <Text style={styles.dire1}>Cor</Text>
            <View style={styles.dire}></View>
            <Text style={styles.dire1}>Ano Fabricação</Text>
            <View style={styles.dire}></View>
            <Text style={styles.dire1}>Município</Text>
            <View style={styles.dire}></View>
            <TouchableOpacity style={styles.cadastro} delay={750} >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                    <AntDesign name='plus' style={styles.lupa} size={20} color={'white'}></AntDesign>
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
        left: '5%',
        top: '4%'
    },
    esq1:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        left: '6%',
        top: '4%'
    },
    dire:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        backgroundColor: '#CBCBCB',
        borderRadius: 8,
        width: '40%',
        left: '55%',
        top: '-23%'
    },
    dire1:{
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        left: '56%',
        top: '-23%'
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
    }


})