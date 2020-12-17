import React, { useState, useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import styles from '../styles/styles';

import Menu from '../components/Menu';

export default function Cadastro({navigation}) {

  return (
    <View style={[styles.container,{justifyContent:"flex-start"}]}>
      <Menu title="Cadastro" navigation={navigation}/>
    </View>
  );
}
