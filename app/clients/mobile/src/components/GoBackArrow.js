import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../constants/Colors';

export default function GoBackArrow(props) {
  return (
    <View 
      style={{
        // flex: 1,
        position: 'absolute',
        top: 0,
        left: props.left ? '5%' : '85%',
        // alignItems: props.left ? 'flex-start' : 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
      }}
    >
      <Icon 
        name={props.left ? "arrowleft" : "arrowright"}
        type="antdesign" 
        size={35} 
        color={props.dark ? Colors.background : Colors.secondary}
        onPress={() => props.goBack()}
        containerStyle={{margin: '2%'}}
      />
    </View>
  );
}