import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

import * as animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";
import Signin from "../Signin";

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.containerlogo}>
            <animatable.Image
            animation="flipInY"
            source={require('../../fotos/logo.png')}
            style={{width: '100%'}}
            resizeMode="contain"
            />
        </View>
        <animatable.View style={styles.containerForm} animation='fadeInUp' delay={600}>
            <Text style={styles.title} >BASE AÉREA DE ANÁPOLIS</Text>
            <Text style={styles.text} >Faça o login para continuar</Text>
            <TouchableOpacity style={styles.buttonACS} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.buttonACSTXT}>Acessar</Text>
            </TouchableOpacity>

        </animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#2A5679'

    },
    containerlogo:{
        flex:2,
        backgroundColor: '#2A5679',
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        
    },
    title:{
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center'

    },
    text:{
        color: '#a1a1a1',    
        alignSelf: 'center',
        marginTop: 5
    },
    buttonACS:{
        position: 'absolute',
        backgroundColor: '#ED2E38',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonACSTXT:{
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold'
    }
})