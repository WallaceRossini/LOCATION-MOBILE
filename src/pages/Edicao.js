import React, { useState, useEffect } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';

import { BarCodeScanner } from 'expo-barcode-scanner';

import Menu from '../components/Menu';

export default function Edicao({ navigation }) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [displayQR, setDisplayQR] = useState('flex');
  const [displayForm, setDisplayForm] = useState('none');
  const [code, setCode] = useState(null);
  const [product, setProduct] = useState(null);
  const [local, setLocal] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function handleBarCodeScanned({ type, data }) {
    setScanned(true);
    setDisplayQR('none');
    setDisplayForm('flex');
    setCode(data);
  };

  async function sendForm(){

  }

  return (
    <View style={[styles.container, { justifyContent: "flex-start" }]}>
      <Menu title="Edição" navigation={navigation} />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : value => handleBarCodeScanned(value)}
        style={styles.qr_code(displayQR)}
      />
      <View style={styles.qr_form(displayForm)}>
        <Text>{code}</Text>
        <View style={styles.login_input}>
          <TextInput value={product} placeholder="Nome do Produto" onChangeText={text => setProduct(text)} />
          <TextInput value={local} placeholder="Localização" onChangeText={text => setLocal(text)} />
        </View>
        <TouchableOpacity style={styles.login_btn} onPress={() => sendForm()}>
          <Text style={styles.login_btn_text}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
