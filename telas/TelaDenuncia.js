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
    const [modalGravidadeVisible, setModalGravidadeVisible] = useState(false);

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

    const handleGravidadePress = () => {
        setModalGravidadeVisible(true);
    }

    const handleSelecionaGravidade = () => {
        setModalGravidadeVisible(false);
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


                <TouchableOpacity style={styles.button}>
                    <Image source={local} style={styles.buttonImage}/>
                    <Text style={styles.buttonText}>Local</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleGravidadePress}>
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
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>

                        <Text style={styles.modalTituloText}>Deseja realemte sair?</Text>

                        <View style={styles.modalSairButtonsContainer}>
                            <TouchableOpacity style={styles.modalSairSairButton}>
                                <Text style={styles.modalButtonText}>Sair</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalSairCancelarButton} onPress={handleCancelar}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

            <Modal animationType='fade' transparent={true} visible={modalGravidadeVisible}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>

                        <Text style={styles.modalTituloText}>Qual a gravidade da situação?</Text>

                        <View>
                            <TouchableOpacity onPress={handleSelecionaGravidade} style={styles.modalButtonGravidadeLeve}>
                                <Text style={styles.modalButtonText}>Baixa</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleSelecionaGravidade} style={styles.modalButtonGravidadeModerada}>
                                <Text style={styles.modalButtonText}>Moderada</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleSelecionaGravidade} style={styles.modalButtonGravidadeAlta}>
                                <Text style={styles.modalButtonText}>Alta</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
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
    modalTituloText: {
        fontSize: 18,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#0C503C'
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
    modalButtonText: {
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
    modalButtonGravidadeLeve: {
        backgroundColor: '#7EB902',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
        width: 150,
        marginVertical: 10,
    },
    modalButtonGravidadeModerada: {
        backgroundColor: '#B9BC1B',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
        width: 150,
        marginVertical: 10,
    },
    modalButtonGravidadeAlta: {
        backgroundColor: '#FF2E00',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
        width: 150,
        marginVertical: 10,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
