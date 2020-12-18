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
  },
  tab:{
    backgroundColor:color.dark,
    fontSize: 20,
    fontWeight:'bold',
    color:color.white
  },
  menu:{
    flexDirection:'row',
    paddingTop:40,
    paddingBottom: 10,
    width:'100%',
    backgroundColor:color.info,
    alignItems:'center',
    justifyContent:'center'
  },
  btn__home:{
    textAlign:'left'
  },
  title:{
    width:'80%',
    fontWeight:'bold',
    fontSize:20,
    color:color.dark,
    textAlign:'center'
  },
  btn__logout:{
    textAlign:'right'
  },
  qr_code:(display="flex")=>({
    width:'100%',
    height:'100%',
    backgroundColor:color.dark,
    justifyContent:'center',
    display: display
  }),
  qr_form:(display="none")=>({
    width:'100%',
    display: display
  }),

});