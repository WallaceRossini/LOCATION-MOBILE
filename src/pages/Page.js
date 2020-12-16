import React from 'react'
import { Text, View } from 'react-native'

export default function Page(props) {
  return (
   <View>
     <Text>O nome da empresa {props.empresa}</Text>
   </View>
  )
}
