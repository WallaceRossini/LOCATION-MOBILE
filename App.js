import React from 'react';
import { Text, View } from 'react-native';

import styles from './src/styles/styles';

import Page from './src/pages/Page';

export default function App() {
  const props = {
    empresa: 'DBA',
    name: 'Wallace'
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Page {...props}/>
      {/* <Page empresa='Programação' /> */}
    </View>
  );
}

