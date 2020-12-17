import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logomarca from '../../assets/logomarca.png';

import styles from '../styles/styles';

export default function Login({navigation}) {

  const [display, setDisplay] = useState('none');
  const [email, setEmail] = useState(null);
  const [msg, setMsg] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState(null);

  async function sendForm(){
    let response = await fetch('http://devrossiniwallace.com.br/auth/log_in',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    });

    let json = await response.json();

    console.log(json);

    if(json === false){
      setDisplay('flex');
      setTimeout(() => {
        setDisplay('none');
      },3000);
      await AsyncStorage.clear();
    }else{
      await AsyncStorage.setItem('user',JSON.stringify(json));
      navigation.navigate('AreaRestrita');
    }
  }

  return (
    <KeyboardAvoidingView 
    behavior = {Platform.OS == 'ios' ? 'padding': 'height'}
    style={[styles.container,styles.dark_bg]}>
      <View style={styles.logomarca}>
        <Image source={logomarca} />
        <Text>{msg}</Text>
      </View>
      <View>
        <Text style={styles.login_msg(display)}>Usuário ou senha inválidos!</Text>
      </View>
      <View style={styles.login_form}>
        <TextInput style={styles.login_input} placeholder="Email" onChangeText={text => setEmail(text)} />
        <TextInput style={styles.login_input} placeholder="Senha" onChangeText={text => setPassword(text)} secureTextEntry={true} />
        <TouchableOpacity style={styles.login_btn} onPress={() => sendForm()}>
          <Text style={styles.login_btn_text}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
