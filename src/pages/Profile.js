import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import styles from '../styles/styles';

import Menu from '../components/Menu';
import AsyncStorage from '@react-native-community/async-storage';

export default function Profile({ navigation }) {

  const [id_user, setIdUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [msg, setMsg] = useState(null);
  const [password_conf, setPasswordConf] = useState(null);

  useEffect(() => {
    async function getIdUser() {
      let response = await AsyncStorage.getItem('user');
      let json = JSON.parse(response);

      setIdUser(json.id);
    }
    getIdUser();
  })

  async function sendForm() {

    if (password !== password_conf) {
      setMsg('Senhas estão diferentes');
     setTimeout(()=>{
      setMsg(null);
     },3000)
    } else {
      let response = await fetch(`http://devrossiniwallace.com.br/users/${id_user}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: password
        })
      });
      setMsg('Alteração realizada con sucesso');
     
      setTimeout(()=>{
        setPassword(null);
        setPasswordConf(null);
        setMsg(null);
       },3000)
    }
  }

  return (
    <View style={[styles.container, { justifyContent: "flex-start" }]}>
      <Menu title="Perfil" navigation={navigation} />
      <View>
       <Text> {msg}</Text>
        <TextInput placeholder="Nova senha" secureTextEntry={true} onChangeText={text => setPassword(text)} />
        <TextInput placeholder="Confirmar senha" secureTextEntry={true} onChangeText={text => setPasswordConf(text)} />
        <TouchableOpacity onPress={() => sendForm()}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
