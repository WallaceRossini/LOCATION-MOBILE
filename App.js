import React, { useState, useEffect }  from 'react';
import { Button, Text, View, Alert } from 'react-native';

import styles from './src/styles/styles';

import Page from './src/pages/Page';

export default function App() {

  const [product,setProduct] = useState('bola');
  const [quantity,setQuantity] = useState(0);
  
  useEffect(() => {
    if(quantity > 0){
      Alert.alert('Novo produto foi adicionado');
    }
  },[quantity]);

  const props = {
    empresa: 'DBA',
    name: 'Wallace',
    produto:product,
    quantidade:quantity
  }
  
  return (
    <View style={styles.container}>
      <Text>{product}</Text>
      <Page {...props}/>
      <Button title='Adicionar produtos' onPress={()=>setQuantity(quantity + 1)}/>
      {/* <Page empresa='Programação' /> */}
    </View>
  );
}

