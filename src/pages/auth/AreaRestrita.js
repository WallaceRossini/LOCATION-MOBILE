import React, { useState, useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Profile, Cadastro, Edicao } from '../index';
import color from '../../styles/colors';
import styles from '../../styles/styles';

export default function Area_Restrita() {

  const [user, setUser] = useState(null);
  const Tab = createMaterialBottomTabNavigator();

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('user');
      let json = JSON.parse(response);

      setUser(json.name);
    }
    getUser();
  }, []);

  return (
    <Tab.Navigator
      activeColor={color.info}
      inactiveColor={color.white}
      barStyle={styles.tab}
    >
      <Tab.Screen  
      name="Profile"
      component={Profile} 
      options={{
        tabBarIcon:()=>(
          <Feather name="user" size={18} color={color.white}/>
        )
      }}
      />
      <Tab.Screen 
      name="Cadastro" 
      component={Cadastro} 
      options={{
        tabBarIcon:()=>(
          <Feather name="plus-square" size={18} color={color.white}/>
        )
      }}
      />
      <Tab.Screen 
      name="Edicao" 
      component={Edicao} 
      options={{
        tabBarIcon:()=>(
          <Feather name="edit" size={18} color={color.white}/>
        )
      }}
      />
    </Tab.Navigator>
  )
}
