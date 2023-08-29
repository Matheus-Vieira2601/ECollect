import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Carregamento from './telas/TelaCarregamento';
import Login from './telas/TelaLogin';
import Cadastro from './telas/TelaCadastro';
import Home from './telas/TelaPrincipal';
import Denuncia from './telas/TelaDenuncia';

export default function App() {  
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Denuncia />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#0C503C',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
