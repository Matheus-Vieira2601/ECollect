import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableHighlight, Text, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import voltar from '../assets/voltar.png';

export default function TelaConta() {
    const navigation = useNavigation();

    const handleNavegarHome = () => {
        navigation.navigate('TelaHome');
    };

    const handleNavegarLogin = () => {
        navigation.navigate('TelaLogin');
    };

    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                <TouchableOpacity onPress={() => { handleNavegarHome(); }}>
                    <Image source={voltar} style={styles.navImage}/>
                </TouchableOpacity>
                <Text style={styles.navText}>Meu Perfil</Text>
                <View style={{width: 60, marginRight: 10}}></View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.formContainer}>
                    <View style={styles.formImage}>

                    </View>
                    <View style={styles.formCampos}>
                        <Text>Nome</Text>
                        <TextInput style={styles.campos}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navContainer: {
        width: '100%',
        height: '11%',
        backgroundColor: '#0C503C',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navImage: {
        height: 60,
        width: 60,
        marginLeft: 10,
    },
    navText: {
        color: '#CFEB0D',
        fontWeight: 'bold',
        fontSize: 18,
    },
    bodyContainer: {
        backgroundColor: '#D5F2CE',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        height: 500,
        width: 290,
        borderRadius: 40,
        elevation: 15,
        alignItems: 'center',
    },
    formImage: {
        height: 140,
        width: 140,
        backgroundColor: 'black',
        borderRadius: 200,
        marginTop: -70,
    },
    formCampos: {
        alignItems: 'flex-start',
        width: '85%',
    },
    
    campos: {
        borderBottomColor: 'black',
        width: '100%',
        borderBottomWidth: 1,
        height: 39,
        zIndex: 2,
    },
})