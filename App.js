import React, { useState, useEffect }  from 'react';
import { Button, Text, View, Alert } from 'react-native';

import styles from './src/styles/styles';

import Page from './src/pages/Page';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';

export default function App() {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  // const [product,setProduct] = useState('bola');
  // const [quantity,setQuantity] = useState(0);
  
  // useEffect(() => {
  //   if(quantity > 0){
  //     Alert.alert('Novo produto foi adicionado');
  //   }
  // },[quantity]);

  // const props = {
  //   empresa: 'DBA',
  //   name: 'Wallace',
  //   produto:product,
  //   quantidade:quantity
  // }
  
  // return (
  //   <View style={styles.container}>
  //     <Text>{product}</Text>
  //     <Page {...props}/>
  //     <Button title='Adicionar produtos' onPress={()=>setQuantity(quantity + 1)}/>
  //     {/* <Page empresa='Programação' /> */}
  //   </View>
  // );
}

