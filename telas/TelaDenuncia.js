import React, { useState } from 'react';
import { RNCamera } from 'react-native-camera';
import { View, Image, StyleSheet, Text, TouchableOpacity, Modal, Button } from 'react-native';
import logo from '../assets/LogoEcollect.png';
import voltar from '../assets/voltar.png';
import opcoes from '../assets/opcoes2.png';
import denuncia from '../assets/denuncia.png';
import cameraIcon from '../assets/camera.png'; // Renomeei para evitar conflito com o nome da câmera
import local from '../assets/localizacao2.png';
import gravidade from '../assets/gravidade.png';
import descricao from '../assets/descricao.png';

export default function TelaLogin() {
    const [modalSairVisible, setModalSairVisible] = useState(false);
    const [cameraOpen, setCameraOpen] = useState(false);

    const handleVoltarPress = () => {
        setModalSairVisible(true);
    }

    const handleCancelar = () => {
        setModalSairVisible(false);
    }

    const handleConfirmarSair = () => {
        // Coloque aqui a lógica para sair do aplicativo
        // Por exemplo, navegar para a tela de login ou encerrar o aplicativo
    }

    const handleOpenCamera = () => {
        setCameraOpen(true);
    }

    const handleCloseCamera = () => {
        setCameraOpen(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                <TouchableOpacity onPress={handleVoltarPress}>
                    <Image source={voltar} style={styles.navIcon}/>
                </TouchableOpacity>
                <Image source={logo} style={styles.navIcon} />
                <TouchableOpacity><Image source={opcoes} style={styles.navIcon}/></TouchableOpacity>
            </View>

            <View style={styles.bodyCenter}>
                <Image source={denuncia} style={styles.bodyCenterImg}/>
                <Text style={styles.bodyCenterText}>Denúncia</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleOpenCamera}>
                    <Image source={cameraIcon} style={styles.buttonImage}/>
                    <Text style={styles.buttonText}>Câmera</Text>
                </TouchableOpacity>

                {cameraOpen && (
                    <RNCamera
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        captureAudio={false}
                    >
                        {/* Botão para fechar a câmera */}
                        <TouchableOpacity onPress={handleCloseCamera} style={styles.closeCameraButton}>
                            <Text style={styles.closeCameraButtonText}>Fechar Câmera</Text>
                        </TouchableOpacity>
                    </RNCamera>
                )}

                <TouchableOpacity style={styles.button}>
                    <Image source={local} style={styles.buttonImage}/>
                    <Text style={styles.buttonText}>Local</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={gravidade} style={styles.buttonImage}/>
                    <Text style={styles.buttonText}>Gravidade</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={descricao} style={styles.buttonImage}/>
                    <Text style={styles.buttonText}>Descrição</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonSubmit}>
                <Text style={styles.buttonSubmitText}>Enviar sua denúncia!</Text>
            </TouchableOpacity>

            <Modal animationType='fade' transparent={true} visible={modalSairVisible}>
                {/* ... (o resto do seu modal) */}
            </Modal>
        </View>
    );
}

// Estilos (seu StyleSheet.create)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#093A2B',
        alignItems: 'center',
    },
    navContainer: {
        width: 385,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    navIcon: {
        width: 65,
        height: 55,
    },
    bodyCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
    },
    bodyCenterImg: {
        height: 150,
        width: 150,
    },
    bodyCenterText: {
        color: '#CFEB0D',
        fontSize: 45,
        elevation: 25,
    },
    buttonsContainer: {
        width: 300,
        height: 180,
        backgroundColor: '#093A2B',
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#D8D8D8',
        width: 120,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    buttonImage: {
        height: 119,
        width: 120,
    },
    buttonText: {
        color: '#093A2B',
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 15,
    },
    buttonSubmit: {
        backgroundColor: '#CFEB0D',
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 20,
    },
    buttonSubmitText: {
        color: '#093A2B',
        fontWeight: 'bold',
    },
    modalSairBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalSairContainer: {
        width: 300,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    modalSairText: {
        fontSize: 18,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalSairButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,  // Adicione um espaçamento superior
    },
    modalSairCancelarButton: {
        marginHorizontal: 10,
        backgroundColor: '#7EB902',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
    },
    modalSairButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    modalSairSairButton: {
        marginHorizontal: 10,
        backgroundColor: '#FF2E00',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 20,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
