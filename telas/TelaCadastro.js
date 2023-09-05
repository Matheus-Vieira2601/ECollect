import React from 'react';
import { View, Image, TextInput, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/LogoEcollect.png';
import slogan from '../assets/SloganEcollect.png';

export default function TelaLogin() {

    const navigation = useNavigation();

    const handleNavegarLogin = () => {
        navigation.navigate('TelaLogin');
    };

    const handleNavegarHome = () => {
        navigation.navigate('TelaHome');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.campos}
                    placeholder="Nome"
                    autoCapitalize="words"
                />
                <TextInput
                    style={styles.campos}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.campos}
                    placeholder="Telefone"
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.campos}
                    placeholder="Senha"
                    secureTextEntry
                />
                <TouchableHighlight
                    style={styles.botao}
                    onPress={() => { handleNavegarHome(); }}
                    underlayColor="#CFEB0D"
                >
                    <Text style={styles.botaoTexto}>Entrar</Text>
                </TouchableHighlight>

                <Text style={styles.cadastroTexto}>
                    Já possui uma conta? clique {' '}
                    <TouchableHighlight onPress={() => { handleNavegarLogin(); }}>
                        <Text style={styles.linkCadastro}>aqui</Text>
                    </TouchableHighlight>
                </Text>
            </View>
            <View style={styles.sloganContainer}>
                <Image source={slogan} resizeMode='contain' style={styles.slogan} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#093A2B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 0,
        width: 1000,
        height: 200,
    },
    logo: {
        width: 200,
        height: 176,
    },
    formContainer: {
        width: 350,
        height: '60%',
        backgroundColor: '#1C7359',
        borderRadius: 40,
        paddingBottom: 10,
        marginVertical: 15,
        paddingVertical: 20
    },
    campos: {
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 35,
        width: 280,
        backgroundColor: '#ffffff',
    },
    botao: {
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginBottom: 10,
        marginTop: 20,
        marginHorizontal: 35,
        width: 280,
        backgroundColor: "#CFEB0D",
    },
    botaoTexto: {
        color: '#000000',
        textAlign: 'center',
    },
    cadastroTexto: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 20,
    },
    linkCadastro: {
        color: '#CFEB0D',
        textDecorationLine: 'underline',
    },
    sloganContainer: {
        alignItems: 'center',
        height: 50,
        width: 100,
    },
    slogan: {
        width: 300,
        height: 50,
    },
});
