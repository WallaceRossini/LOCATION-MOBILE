import React from 'react';
import { StyleSheet } from 'react-native';

import color from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_2: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logomarca: {
    marginBottom: 10,
  },
  btn_home:{
    margin: 20,
    backgroundColor: color.info,
    padding: 5,
    borderRadius: 10,
    width:100,
    alignItems:'center',
    justifyContent:'center'
  },
  dark_bg: {
    backgroundColor: color.dark
  },
  login_msg:(text="none")=>({
    fontWeight:'bold',
    fontSize: 18,
    color: color.danger,
    marginTop: 5,
    marginBottom: 15,
    display: text
  }),
  login_form: {
    width: '80%',
  },
  login_input: {
    backgroundColor: color.white,
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
    borderRadius: 5
  },
  login_btn: {
    width: "50%",
    padding: 12,
    backgroundColor: color.info,
    alignSelf: 'center',
    borderRadius: 5,
  },
  login_btn_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: color.dark
  }
});