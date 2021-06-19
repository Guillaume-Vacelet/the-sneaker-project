import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Colors from '../../../constants/Colors';
import { Icon } from 'react-native-elements';

export default function ProfileUsername(props) {
  return (
    <View style={{height: '20%', width: '70%', alignItems: 'center', justifyContent: 'center'}}>
      {props.editMode
        ? <View style={{flexDirection: 'row', width: '100%'}}>
            <Icon
              type={'material-community'}
              name={'pencil'}
              size={20}
              color={Colors.primary}
              containerStyle={{position: 'absolute', top: 10, left: 10}}
            />
            <TextInput onChangeText={props.setter}
              textAlign={'center'}
              maxLength={12}
              value={props.editValue}
              style={{
                width: '100%',
                height: 43,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.primary,
                fontSize: 30,
                fontWeight:'bold',
                color: Colors.secondary,
              }}
            />
          </View>
        : <Text style={{fontSize: 30, fontWeight:'bold', color: Colors.secondary}}>
            { props.initialValue }
          </Text>
      }
    </View>
  )
}