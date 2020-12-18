import React, { useState, useEffect } from 'react'
import { Button, Text, View, Image ,TextInput, TouchableOpacity} from 'react-native';
import Menu from '../components/Menu';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/styles';
import color from '../styles/colors';

export default function Cadastro({ navigation }) {

  const address = 'Av. Paulista, 200 - São Paulo / SP';
  const [code, setCode] = useState(null);
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const[response,setResponse] = useState(null);
  useEffect(()=>{
    getUser();
  },[]);

  useEffect(()=>{
    randomCode();
    setProduct(null);
  },[response]);

  async function getUser(){
    let response = await AsyncStorage.getItem('user');
    let json = JSON.parse(response);

    setUser(json.id);
  }
  async function randomCode() {
    let result = '';
    let length = 20;
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCode(result);
  }

  async function sendForm(){
    let response = await fetch(`http://devrossiniwallace.com.br/users/${user}/tracking`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        code:code,
        local:address,
        name: product
      })
    })

    let json = await response.json();

    console.log(json);

    setResponse(json);
  }

  return (
    <View style={[styles.container,{ justifyContent: "flex-start" }]}>
      <Menu title="Cadastro" navigation={navigation} />
      {
        response && (
          <View>
            <Image source={{uri: response, height:180,width:180}}/> 
            <Button title="Compartilhar"/>
          </View>
        )
      }
      <View style={styles.login_input}>
        <TextInput value={product} placeholder="Nome do Produto" onChangeText={text => setProduct(text)}/>
      </View>
      <TouchableOpacity style={styles.login_btn} onPress={()=>sendForm()}>
        <Text style={styles.login_btn_text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
