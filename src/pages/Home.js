import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from '../styles/styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container_2}>
      <TouchableOpacity
        style={styles.btn_home}
        onPress={() => navigation.navigate('Rastreio')}>
        <Feather name="package" size={40} color='#41414D'/>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btn_home}
        onPress={() => navigation.navigate('Login')}>
        <Feather name="log-in" size={40} color='#41414D'/>
      </TouchableOpacity>
    </View>
  )
}
