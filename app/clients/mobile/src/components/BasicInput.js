import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function BasicInput(props) {
  return (
    <View style={{width: 300, marginHorizontal: '3%',}}>
      <Text style={{color: 'grey', fontSize: 16, fontWeight: '500'}}>
        {props.label}
      </Text>
      <TextInput 
        keyboardType={props.type ? props.type : 'default'}
        secureTextEntry={props.secured}
        onChangeText={(value) => props.setter(value)}
        style={{
          width: '100%',
          height: 43,
          marginBottom: '8%',
          borderRadius: 8,
          borderWidth: 1,
          fontSize: 18,
          paddingLeft: 10,
          borderColor: 'lightgray',
        }}
        placeholderTextColor='lightgray'
      />
    </View>
  )
};