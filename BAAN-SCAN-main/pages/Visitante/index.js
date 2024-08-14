import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'





export default function Carro(){
    const navigation = useNavigation();
    return (

        <View style={ styles.container1}>
            <Animatable.View style={styles.container}>
                <Animatable.Image
                animation="slideInDown"
                source={require('../../fotos/logo_menor1.png')}
                style={styles.logo}
                resizeMode="contain"/>
            </Animatable.View>
            <Animatable.Text animation='fadeInLeft'delay={500} style={styles.sloganHeader} >
                <Text style={styles.slogan} >Visitante</Text>
            </Animatable.Text>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <AntDesign name="home" size={36} color="white" backgroundColor='#2A5679' style={styles.home} />
            </TouchableOpacity>
            <Animatable.View style={styles.page} animation={'fadeInLeft'} delay={500} > 
                <TouchableOpacity style={styles.buttonCar} onPress={() => navigation.navigate('NovoVisit')} >
                    <AntDesign name="adduser" size={36} color="white"/>
                    <Text style={styles.labelbutton}>Novo Visitante</Text>            
                </TouchableOpacity>
                <Text style={styles.ou}>OU</Text>
                <TouchableOpacity style={styles.buttonOff} onPress={() => navigation.navigate('InfoVisit')}>
                    <AntDesign name="user" size={36} color="white"/>
                    <Text style={styles.labelbutton}>Info Visitante</Text>            
                </TouchableOpacity>
            </Animatable.View>
        </View>


    )

}


const styles = StyleSheet.create({
    container:{
        flex:0,
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
    home:{
        top: -100,
        width: 37,
        left: 30
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
    buttonCar:{
        width: '35%',
        backgroundColor: '#ED2E38',
        borderRadius: 8 ,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderBlockColor: '#ADABAB',
        borderTopWidth: 2,
        borderRightWidth:4,
        borderLeftWidth:1, 
        borderRightColor: '#ADABAB',
        borderLeftColor: '#ADABAB',
        marginTop: 50,
        marginLeft: '30%',
        textAlign: 'center',
        height: '22%'
    },
    labelbutton:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
    },
    buttonOff:{
        width: '35%',
        backgroundColor: '#ED2E38',
        borderRadius: 8 ,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderBlockColor: '#ADABAB',
        borderTopWidth: 2,
        borderRightWidth:4,
        borderLeftWidth:1, 
        borderRightColor: '#ADABAB',
        borderLeftColor: '#ADABAB',
        marginTop: '20%',
        marginLeft: '30%',
        textAlign: 'center',
        height:'22%'
    },
    page:{
        flex:1,
        height: 800,
        color: 'white',
    },
    container1:{
        height: '100%',
        width: '100%',
    },
    ou:{
        fontSize: 16,
        left: '43%',
        top: '10%'

    }


})