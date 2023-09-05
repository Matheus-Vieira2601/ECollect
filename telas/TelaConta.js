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

    const [modalSairVisible, setModalSairVisible] = useState(false);

    const handleSairPress = () => {
        setModalSairVisible(true);
    }

    const handleCancelar = () => {
        setModalSairVisible(false);
    }

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
                    <View style={styles.formCampos}>
                        <Text>Email</Text>
                        <TextInput style={styles.campos}/>
                    </View>
                    <View style={styles.formCampos}>
                        <Text>Telefone</Text>
                        <TextInput style={styles.campos}/>
                    </View>
                </View>
                <View style={styles.botoesContainer}>
                    <TouchableOpacity style={styles.botaoSalvar} onPress={() => { handleNavegarHome(); }}>
                        <Text style={styles.textBotaoSalvar}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSairPress}>
                        <Text style={styles.textBotaoSair}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal animationType='fade' transparent={true} visible={modalSairVisible}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                    <Text style={styles.modalTituloText}>Deseja realemte sair?</Text>

                        <View style={styles.modalSairButtonsContainer}>
                            <TouchableOpacity style={styles.modalSairSairButton} onPress={() => { handleNavegarLogin(); }}>
                                <Text style={styles.modalButtonText}>Sair</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalSairCancelarButton}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
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
        marginTop: 90,
        marginBottom: 40,
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
        marginVertical: 25,
    },
    campos: {
        borderBottomColor: 'black',
        width: '100%',
        borderBottomWidth: 1,
        height: 39,
        zIndex: 2,
    },
    botoesContainer: {
        alignItems: 'center',
        height: 100,
    },
    botaoSalvar: {
        backgroundColor: '#0C503C',
        width: 280,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 20,
    },
    textBotaoSalvar: {
        color: '#CFEB0D',
        fontWeight: 'bold',
        fontSize: 17,
    },
    textBotaoSair: {
        color: '#FF2E00',
        fontWeight: 'bold',
        fontSize: 17,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContainer: {
        width: 300,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})