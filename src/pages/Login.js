import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logomarca from '../../assets/logomarca.png';

import styles from '../styles/styles';

export default function Login() {

  const [display, setDisplay] = useState('none');

  return (
    <KeyboardAvoidingView 
    behavior = {Platform.OS == 'ios' ? 'padding': 'height'}
    style={[styles.container,styles.dark_bg]}>
      <View style={styles.logomarca}>
        <Image source={logomarca} />
      </View>
      <View>
        <Text style={styles.login_msg(display)}>Usuário ou senha inválidos!</Text>
      </View>
      <View style={styles.login_form}>
        <TextInput style={styles.login_input} placeholder="Usuário" />
        <TextInput style={styles.login_input} placeholder="Senha" secureTextEntry={true} />
        <TouchableOpacity style={styles.login_btn} onPress={() => setDisplay('flex')}>
          <Text style={styles.login_btn_text}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
