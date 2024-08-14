import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";

import * as Animatable from 'react-native-animatable'
import { Picker } from "@react-native-picker/picker";
import {TextInputMask} from 'react-native-masked-text'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function Cadastro() {
    const [patente, setPatente] = useState(['Marechal-do-Ar','Tenente-Brigadeiro', 'Major-Brigadeiro','Brigadeiro','Coronel','Tenente-Coronel','Major','Oficial Subalterno','Aspirante-a-Oficial','Cadete','Suboficial','Graduado','Cabo'])
    const [patenteselecionado, setPatenteSelecionado] = useState([])
    const [cpf,setCpf] = useState('')
    const [cell, setCell] = useState('')
    const navigation = useNavigation();


    return (
        <ScrollView style={styles.container}>
            <Animatable.Image
            animation="slideInDown"
            source={require('../../fotos/logo_menor.png')}
            style={styles.logo}
            resizeMode="contain"
            />
            {/* <TouchableOpacity style={styles.buttonExit}>
                <AntDesign name="home" size={36} color="white"/>
            </TouchableOpacity> */}
            <Animatable.View animation='fadeInLeft'delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
            </Animatable.View>
            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                <Text style={styles.title}>Nome Completo</Text>
                <TextInput placeholder="Digite seu nome completo..." style={styles.input}></TextInput>
                <Text style={styles.title}>CPF</Text>
                <TextInputMask style={styles.input} placeholder="___-___-___-__" type={'cpf'}
                    value={cpf}
                    onChangeText={text => setCpf(text)} />  
                <Text style={styles.title}>Telefone</Text>
                <TextInputMask style={styles.input} type={'cel-phone'}
                    value={cell} placeholder="(__) _____-____"options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    onChangeText={text => setCell(text)} />          
                <Text style={styles.title}>Endereço</Text>
                <TextInput placeholder="Digite seu endereço..." style={styles.input}></TextInput>   
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite seu email..." style={styles.input}></TextInput>
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite sua senha..." style={styles.input}></TextInput>
                <Text style={styles.title}>Nome de Guerra</Text>
                <TextInput placeholder="Digite seu nome de guerra..." style={styles.input}></TextInput>
                <Text style={styles.title}>Patente</Text>

                <Picker
                    selectedValue={patenteselecionado}
                    style = {styles.pick}
                    onValueChange={(itemValue, itemIndex) =>
                        setPatenteSelecionado(itemValue)
                    }>{
                        patente.map(cr =>  <Picker.Item label={cr} value={cr} />)
                    }
                </Picker>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')} delay={750}>
                    <Text style={styles.buttonText}>Criar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2A5679',
    },
    logo:{
        marginTop: 35,
        width: '100%',
    },
    containerHeader:{
        marginTop: '-4%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm:{
        backgroundColor: 'white',
        flex:1 ,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '10%',
        marginTop: -20,
        height: 890
        
    },
    pick:{
        height: 150, 
        width: '100%',
        marginLeft: 0,
        marginTop: -20

    },
    title:{
        fontSize: 16,
        marginTop: 10,

    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        backgroundColor: '#f3f1f1',
        borderRadius: 8
    },
    button:{
        backgroundColor: '#ED2E38',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonExit:{
        left:350,
        top: 20,

    }

})