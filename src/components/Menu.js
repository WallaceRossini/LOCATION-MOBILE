import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/styles';
import color from '../styles/colors';

export default function Menu(props){

  async function logout(){
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
   }
 
   return (
     <View style={styles.menu}>
       <TouchableOpacity style={styles.btn__home} onPress={() => props.navigation.navigate('Home')}>
         <Feather name="home" size={20} color={color.dark} />
       </TouchableOpacity>
       <Text style={styles.title}>{props.title}</Text>
       <TouchableOpacity style={styles.btn__logout} onPress={() => logout()}>
         <Feather name="log-out" size={20} color={color.dark} />
       </TouchableOpacity>
     </View>
   );
}