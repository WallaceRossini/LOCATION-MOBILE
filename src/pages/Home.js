import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from '../styles/styles';
import color from '../styles/colors';

export default function Home({ navigation }) {
  return (
    <View style={styles.container_2}>
      <TouchableOpacity
        style={styles.btn_home}
        onPress={() => navigation.navigate('Rastreio')}>
        <Feather name="package" size={40} color={color.dark}/>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btn_home}
        onPress={() => navigation.navigate('Login')}>
        <Feather name="log-in" size={40} color={color.dark}/>
      </TouchableOpacity>
    </View>
  )
}
