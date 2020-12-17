import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/styles';

import Menu from '../components/Menu';

export default function Profile({navigation}) {

  return (
    <View style={[styles.container,{justifyContent:"flex-start"}]}>
      <Menu title="Perfil" navigation={navigation}/>
    </View>
  );
}
