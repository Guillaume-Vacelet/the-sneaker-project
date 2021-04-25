import React from 'react';
import {Button, Icon} from 'react-native-elements';


export default function ScanButton(props) {
  return (
    <Button
      onPress={() => console.log('scan!')}
      buttonStyle={{
        marginBottom: 55,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: props.bgcolor,
        borderRadius: 50
      }}
      icon={
        <Icon 
          type={"antdesign"}
          name={"scan1"}
          size={40}
          color={props.color}
        />
      }
    >
    </Button>

  );
}