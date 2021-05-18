import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../constants/Colors';

export default function GoBackArrow(props) {
  return (
    <View 
      style={{
        flex: 1,
        alignItems: props.left ? 'flex-start' : 'flex-end',
        // backgroundColor: 'blue'
      }}
    >
      <Icon 
        name={props.left ? "arrowleft" : "arrowright"}
        type="antdesign" 
        size={40} 
        color={props.dark ? Colors.background : Colors.secondary}
        onPress={() => props.goBack()}
        containerStyle={{margin: '2%'}}
      />
    </View>
  );
}