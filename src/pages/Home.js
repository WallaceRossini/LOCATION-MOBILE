import React from 'react'
import { Button, Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
   <View>
     <Text>Home</Text>
     <Button title="Login" 
     onPress={() => navigation.navigate('Login',{
       id:30
     })}
     />
   </View>
  )
}
