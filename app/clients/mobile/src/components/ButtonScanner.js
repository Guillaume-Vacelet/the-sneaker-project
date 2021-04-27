import React, { useState } from 'react';
import { StyleSheet, Button,Text, View,} from 'react-native';
import { ScanOutlined } from '@ant-design/icons';

const Button_Scanner = () => {
    return (
    <View>
     <View style={styles.container}> 
      <Text style={styles.text}> <ScanOutlined style={{ fontSize: '20px'}}/>  Scanner</Text> 
    </View> 
    </View>
    )}

 export default Button_Scanner;

 const styles = StyleSheet.create({
   container: {
       backgroundColor:'#73eca6',
       paddingHorizontal:25,
       paddingVertical:10,
       borderRadius: 20,
   },

   text: {
      color:'white',
      fontSize: 18,
      fontWeight: "bold",

   }
 });
