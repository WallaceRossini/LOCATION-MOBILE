import React, { useState, useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import styles from '../styles/styles';

import Menu from '../components/Menu';

export default function Edicao({navigation}) {

  return (
    <View style={[styles.container,{justifyContent:"flex-start"}]}>
      <Menu title="Edição" navigation={navigation}/>
    </View>
  );
}
