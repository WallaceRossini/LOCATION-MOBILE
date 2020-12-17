import React, { useState, useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Area_Restrita() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser(){
      let response = await AsyncStorage.getItem('user');
      let json = JSON.parse(response);

      setUser(json.name);
    }
    getUser();
  },[]);

  return (
   <View>
     <Text>Area Restrita </Text>
     <Text>Seja bem vindo {user} </Text>
   </View>
  )
}
