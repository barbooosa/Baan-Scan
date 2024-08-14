import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";

export default function Principal(){
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
            <Animatable.View style={styles.page} animation={'fadeInLeft'} delay={500}> 
                <TouchableOpacity style={styles.buttonCar} onPress={() => navigation.navigate('Carro')} >
                    <AntDesign name="car" size={36} color="white"/>
                    <Text style={styles.labelbutton}>Veículo</Text>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOff} onPress={() => navigation.navigate('Militar')}>
                    <AntDesign name="user" size={36} color="white"/>
                    <Text style={styles.labelbutton}>Info Militar</Text>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonVisit} onPress={() => navigation.navigate('Visitante')}>
                    <AntDesign name="smileo" size={36} color="white"/>
                    <Text style={styles.labelbutton}>Visitante</Text>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonInfoCar}onPress={() => navigation.navigate('Registro')}>
                    <AntDesign name="carryout" size={36} color="white"/>
                    <Text style={styles.labelbutton}>Entrada/Saída</Text>            
                </TouchableOpacity>
                <Text style={styles.txtcar}> 
                <AntDesign name="arrowleft" size={15} color='black'></AntDesign>
                Aqui você pode cadastrar e consultar o veículo pela placa e o renavam
                </Text>
                <Text style={styles.txtoff}> 
                <AntDesign name="arrowleft" size={15} color='black'></AntDesign>
                Aqui você pode ver as informações de um Militar
                </Text>
                <Text style={styles.txtvisit}> 
                <AntDesign name="arrowleft" size={15} color='black'></AntDesign>
                Aqui você pode cadastrar um visitante para que possa ter acesso a Base Aérea de Anápolis
                </Text>
                <Text style={styles.txtinfo}> 
                <AntDesign name="arrowleft" size={15} color='black'></AntDesign>
                Aqui você tem acesso as informações sobre entrada e saída de um veículo
                </Text>
            </Animatable.View>
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
        height: 160,
        
    },
    logo:{
        marginHorizontal: '41%',
        marginTop: 37

    },

    buttonCar:{
        width: '30%',
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
        marginLeft: '5%',
        textAlign: 'center',
        height: '11%'
    },
    labelbutton:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonOff:{
        width: '30%',
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
        marginTop: 30,
        marginLeft: '5%',
        textAlign: 'center',
        height:'11%'
    },
    buttonVisit:{
        width: '30%',
        height: '11%',
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
        marginTop: 30,
        marginLeft: '5%',
        textAlign: 'center',
    },
    buttonInfoCar:{
        width: '30%',
        height: '11%',
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
        marginTop: 30,
        marginLeft: '5%',
        textAlign: 'center',

    },
    page:{
        flex:1,
        height: 800,
        color: 'white',
    },
    txtcar:{
        fontSize: 14,
        left: '44%',
        width: '43%',
        textAlign: 'center',
        top: '-51%',
        fontWeight: 'bold',
        color: '#ADABAB'

    },
    txtoff:{
        fontSize: 14,
        left: '39%',
        width: '50%',
        textAlign: 'center',
        top: '-43%',
        fontWeight: 'bold',
        color: '#ADABAB',

    },
    txtvisit:{
        fontSize: 14,
        left: '43%',
        width: '47%',
        textAlign: 'center',
        top: '-33%',
        fontWeight: 'bold',
        color: '#ADABAB'  
    },
    txtinfo:{
        fontSize: 14,
        left: '42%',
        width: '50%',
        textAlign: 'center',
        top: '-27%',
        fontWeight: 'bold',
        color: '#ADABAB'
    }
})
