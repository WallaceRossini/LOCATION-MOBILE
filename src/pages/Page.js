import React from 'react'
import { Text, View } from 'react-native'

import styles from '../styles/styles';

export default function Page(props) {
  return (
   <View>
     <Text style={styles.textPage}>O nome da empresa {props.empresa}</Text>
   </View>
  )
}
