import React from 'react';
import {Icon} from 'react-native-elements';

export default function ScanButton() {
  return (
    <Icon 
      type={"antdesign"}
      name={"scan1"}
      size={40}
      color={'white'}
      containerStyle={{
        backgroundColor: '#73eca6', 
        marginBottom: 55, 
        width: 80, 
        height: 80, 
        justifyContent: 'center', 
        borderRadius: 50
      }}
    />
  );
}