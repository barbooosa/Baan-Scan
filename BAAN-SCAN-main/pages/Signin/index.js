import React, { useState,  } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from "react-native";

import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import {TextInputMask} from 'react-native-masked-text'
import { FontAwesome5 } from 'react-native-vector-icons'






export default function Signin() {
    const [cpf,setCpf] = useState('');
    const navigation = useNavigation();
    const [isPassoword, setisPassword] = useState(true);


    return ( 
              
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft'delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                <Text style={styles.title}>CPF</Text>
                <TextInputMask style={styles.entrada} type={'cpf'} placeholder="___-___-___-__"
                    value={cpf}
                    onChangeText={text => setCpf(text)} ></TextInputMask>               
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite sua senha..." style={styles.entrada} secureTextEntry={isPassoword}>
                </TextInput>
                <TouchableOpacity onPress={() => setisPassword(!isPassoword)}>
                    <FontAwesome5 name="eye" size={18} color='black' style={styles.eye} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Principal')}>
                    <Text style={styles.buttonText} >Entrar</Text>
                </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2A5679',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: 'white',
        flex:1 ,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '10%',
        paddingVertical:'1%'
        
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        

    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#f3f1f1',

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
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText:{
        color: '#a1a1a1'
    },
    entrada:{
        backgroundColor: '#f3f1f1',
        fontSize: 20,
        marginTop: 28,
        borderRadius: 8,
        height: 40,
    },
    eye:{
        top:-29,
        left:'91%'
    },


})