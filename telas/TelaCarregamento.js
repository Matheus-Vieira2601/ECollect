import React from 'react';
import { View, Image } from 'react-native';
import logo from '../assets/LogoEcollectCompleta.png';

export default function Carregamento(props) {
  return (
    <View style={{ backgroundColor: '#093A2B', padding: 10 }}>
      <Image source={logo} style={{ width: 250, height: 220 }} />
    </View>
  );
}
