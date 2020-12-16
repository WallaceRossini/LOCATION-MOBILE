import React from 'react'
import { Button, Text, View } from 'react-native';

export default function Login({route}) {
  return (
   <View>
     <Text>Login id:{route.params.id}</Text>
   </View>
  )
}
